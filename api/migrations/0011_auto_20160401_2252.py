# -*- coding: utf-8 -*-
# Generated by Django 1.9.4 on 2016-04-01 20:52
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0010_auto_20160401_2250'),
    ]

    operations = [
        migrations.AlterField(
            model_name='sightingfaq',
            name='quickBody',
            field=models.TextField(default='Clic para más información', max_length=128, verbose_name='Breve explicación'),
        ),
    ]