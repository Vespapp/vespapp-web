# -*- coding: utf-8 -*-
# Generated by Django 1.9.4 on 2016-07-21 08:04
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0031_appversion_last'),
    ]

    operations = [
        migrations.RenameField(
            model_name='appversion',
            old_name='last',
            new_name='is_last',
        ),
    ]