# -*- coding: utf-8 -*-
# Generated by Django 1.9.4 on 2017-05-17 07:50
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0036_auto_20170515_1012'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='sighting',
            name='contact_name',
        ),
        migrations.RemoveField(
            model_name='sighting',
            name='contact_phone',
        ),
    ]
