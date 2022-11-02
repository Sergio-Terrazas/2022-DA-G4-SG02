from datetime import date
from unittest.util import _MAX_LENGTH
from django.db import models

# Create your models here.

class Members(models.Model):
  firstname = models.CharField(max_length=255)
  lastname = models.CharField(max_length=255)
  fechanacimiento = models.DateField()
  monto=models.IntegerField()
  edad=models.IntegerField()