# -*- coding: utf-8 -*-
# Generated by Django 1.9.4 on 2017-05-17 11:05
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0039_remove_userprofile_phone'),
    ]

    operations = [
        migrations.AddField(
            model_name='userprofile',
            name='phone',
            field=models.BigIntegerField(blank=True, null=True, verbose_name='Teléfono'),
        ),
    ]