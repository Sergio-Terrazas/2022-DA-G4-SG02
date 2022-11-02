############################ views.py ######################################
from tkinter.tix import INTEGER
from django.shortcuts import render
from django.template import loader
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse
import datetime
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


def validar(x):
  if (x == 'on'):
    x=True
  else:
    x=False
  return x

def addrecord(request):

  a1 = request.POST['nombre']
  a2 = request.POST['direccion']
  a3 = request.POST['correo']
  a4 = request.POST['contracena']
  a5 = request.POST['date']

  a6 = request.POST.get('hombre',False)
  a7 = request.POST.get('mujer',False)
  print(a6)
  print(a7)
  a8 = request.POST.get('ficcion',False)
  a9 = request.POST.get('terror',False)
  a10 = request.POST.get('accion',False)
  a11 = request.POST.get('comedia',False)
  a12 = request.POST.get('suspenso',False)

  a13 = request.POST['aficion']

  a6 = validar(a6)
  a7 = validar(a7)

  a8 = validar(a8)
  a9 = validar(a9)
  a10 = validar(a10)
  a11 = validar(a11)
  a12 = validar(a12)
 
  member = Members(nombre=a1,direccion=a2,correo=a3,contracena=a4,fechanacimiento=a5,hombre=a6,mujer=a7,ficcion=a8,terror=a9,accion=a10,comedia=a11,suspenso=a12,aficion=a13)
  member.save()

  return HttpResponseRedirect(reverse('index'))




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
  
  return HttpResponseRedirect(reverse('index'))
