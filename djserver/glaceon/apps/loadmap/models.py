from django.db import models
from django.utils.translation import gettext as _

class Course(models.Model):
    title = models.CharField(_('Title'),max_length=255, blank=True)
    slug = models.SlugField(unique=True)
    description = models.TextField(_('Description'), blank=True)

    def __str__(self):
        return self.title

    def get_title(self):
        title = self.title
        return title
