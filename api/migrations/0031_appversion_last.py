# -*- coding: utf-8 -*-
# Generated by Django 1.9.4 on 2016-07-21 07:46
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0030_appversion'),
    ]

    operations = [
        migrations.AddField(
            model_name='appversion',
            name='last',
            field=models.BooleanField(default=False, verbose_name='Es última versión'),
        ),
    ]
