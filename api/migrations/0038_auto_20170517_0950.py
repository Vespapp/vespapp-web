# -*- coding: utf-8 -*-
# Generated by Django 1.9.4 on 2017-05-17 07:50
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0037_auto_20170517_0950'),
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
            field=models.BigIntegerField(blank=True, null=True, verbose_name='Móvil de Contacto'),
        ),
    ]
