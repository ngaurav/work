from django.db import models

class Mail(models.Model):
    name = models.CharField(max_length=60, null=True, blank=True)
    email = models.EmailField(null=True, blank=True)
    phone = models.CharField(max_length=15, null=True, blank=True)
    subject = models.CharField(max_length=120, null=True, blank=True)
    message = models.TextField(max_length=500, null=True, blank=True)

class Polt(models.Model):
    name = models.CharField(max_length=60, null=True, blank=True)
    count1 = models.IntegerField(default=0)
    count2 = models.IntegerField(default=0)
    count3 = models.IntegerField(default=0)
    notes = models.CharField(max_length=60, null=True, blank=True)

