from ast import Num
from datetime import date
from unittest.util import _MAX_LENGTH
from django.db import models

# Create your models here.

class Members(models.Model):
  nombre = models.CharField(max_length=255)
  direccion = models.CharField(max_length=255)
  correo = models.CharField(max_length=255)
  contracena = models.CharField(max_length=255)
  fechanacimiento = models.DateField()
  hombre= models.BooleanField()
  mujer= models.BooleanField()

  ficcion= models.BooleanField()
  terror= models.BooleanField()
  accion= models.BooleanField()
  comedia= models.BooleanField()
  suspenso= models.BooleanField()

  aficion = models.CharField(max_length=255)
