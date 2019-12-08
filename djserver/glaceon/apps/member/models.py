from django.conf import settings
from django.contrib.auth.models import User
from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser, PermissionsMixin


from django.utils import timezone
from django.utils.translation import gettext_lazy as _

class UserProfile(models.Model):
    # ログイン用とは別の画面に表示される名前
    name = models.CharField("Handle Name", max_length=255)
    # user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE,
    #                             related_name='profile')
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE,
                                related_name='profile', primary_key=True)
    bio = models.TextField(blank=True)
    image = models.ImageField(upload_to='profile_image', blank=True)

    def __str__(self):
        return self.name
