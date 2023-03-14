# Generated by Django 3.2.16 on 2023-03-14 02:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('goerli', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='goerliprivate',
            name='roundTipe',
            field=models.CharField(default='private', max_length=7),
        ),
        migrations.AddField(
            model_name='goerlipublic',
            name='roundTipe',
            field=models.CharField(default='public', max_length=6),
        ),
    ]
