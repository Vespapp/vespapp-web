# -*- coding: utf-8 -*-
# Generated by Django 1.9.4 on 2016-04-11 21:48
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0012_merge'),
    ]

    operations = [
        migrations.AddField(
            model_name='question',
            name='order',
            field=models.IntegerField(default=False, verbose_name='Orden en que aparece'),
        ),
    ]
