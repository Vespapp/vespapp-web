# -*- coding: utf-8 -*-
# Generated by Django 1.9.4 on 2016-07-08 14:10
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0025_auto_20160704_0843'),
    ]

    operations = [
        migrations.AlterField(
            model_name='usercomment',
            name='body',
            field=models.CharField(max_length=1024, verbose_name='Comentario'),
        ),
    ]
