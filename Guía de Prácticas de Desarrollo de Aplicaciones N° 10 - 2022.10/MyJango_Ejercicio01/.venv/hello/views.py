############################ views.py ######################################
from tkinter.tix import INTEGER
from django.shortcuts import render
from django.template import loader
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse
import datetime
# Create your views here.
"""
from django.http import HttpResponse
def home(request):
    return HttpResponse("Hello, Django!")
"""


"""
def index(request):
  template = loader.get_template('myfirst.html')
  return HttpResponse(template.render())
  
"""
from .models import Members

def index(request):
  mymembers = Members.objects.all().values()
  template = loader.get_template('index.html')
  context = {
    'mymembers': mymembers,
  }
  return HttpResponse(template.render(context, request))


def add(request):
  template = loader.get_template('add.html')
  return HttpResponse(template.render({}, request))


def addrecord(request):
  x = request.POST['first']
  y = request.POST['last']
  z = request.POST['date']
  a = request.POST['int']
  hoy = datetime.date.today()
  ano = int(z[:4])
  mes = int(z[5]+z[6])
  dia = int(z[-2:])
 
  fecha = datetime.date(ano,mes,dia)
  edad = 0
  while fecha < hoy:
    edad += 1
    fecha = datetime.date(ano+edad, mes, dia)
  edad-=1

  if (edad<=2):
    template = loader.get_template('descuento_1.html')
    a=0
  elif(edad>2 and edad<17):
    template = loader.get_template('descuento_2.html')
    a= (int(a)*0.75)

  else:
    template = loader.get_template('descuento_3.html')
    a=a
  member = Members(firstname=x, lastname=y, fechanacimiento=z,monto=a,edad=edad)
  member.save()

  return HttpResponse(template.render({}, request))




def discount(request):
  return HttpResponseRedirect(reverse('index'))




def delete(request, id):
  member = Members.objects.get(id=id)
  member.delete()
  return HttpResponseRedirect(reverse('index'))


  
def update(request, id):
  mymember = Members.objects.get(id=id)
  template = loader.get_template('update.html')
  context = {
    'mymember': mymember,
  }
  return HttpResponse(template.render(context, request))


def updaterecord(request, id):
  first = request.POST['first']
  last = request.POST['last']
  member = Members.objects.get(id=id)
  member.firstname = first
  member.lastname = last
  member.save()
  return HttpResponseRedirect(reverse('index'))
