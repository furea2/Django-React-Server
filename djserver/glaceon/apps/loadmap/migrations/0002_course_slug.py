# Generated by Django 3.0 on 2019-12-07 22:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('loadmap', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='course',
            name='slug',
            field=models.SlugField(default=0, unique=True),
            preserve_default=False,
        ),
    ]
