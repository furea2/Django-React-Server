from django.shortcuts import render

from .models import Course

from django.views.generic import DetailView, TemplateView, ListView

class LoadmaplView(ListView):
    model = Course

    template_name = 'glaceon/loadmap/browse.html'

class CourseDetailView(DetailView):

    model = Course

    template_name = 'glaceon/loadmap/detail.html'

    slug_url_kwarg = 'course_slug'
    slug_field = 'slug'

