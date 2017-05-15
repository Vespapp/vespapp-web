# -*- coding: utf-8 -*-
# Generated by Django 1.9.4 on 2017-05-15 08:09
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0034_userprofile_phone'),
    ]

    operations = [
        migrations.AddField(
            model_name='sighting',
            name='contact_name',
            field=models.CharField(blank=True, max_length=128, null=True, verbose_name='Nombre del Contacto'),
        ),
        migrations.AddField(
            model_name='sighting',
            name='contact_phone',
            field=models.CharField(blank=True, max_length=128, null=True, verbose_name='Móvil de Contacto'),
        ),
    ]