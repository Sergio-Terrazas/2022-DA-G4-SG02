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

  a1 = request.POST['num1']
  a2 = request.POST['num2']
  a3 = request.POST['num3']
  a4 = request.POST['num4']
  a5 = request.POST['num5']
  a6 = request.POST['num6']
  a7 = request.POST['num7']
  a8 = request.POST['num8']
  a9 = request.POST['num9']
  if(a1 == a5 and a5 == a9):
    template = loader.get_template('esPerfect.html')
  else:
    template = loader.get_template('noPerfect.html')
  member = Members(num1=a1,num2=a2,num3=a3,num4=a4,num5=a5,num6=a6,num7=a7,num8=a8,num9=a9)
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
