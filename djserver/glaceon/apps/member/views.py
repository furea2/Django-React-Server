from django.shortcuts import get_object_or_404, redirect, render

from .models import UserProfile

from django.views.generic import DetailView, TemplateView, ListView

class MypageView(DetailView):

    model = UserProfile

    template_name = 'glaceon/member/profile.html'

    def get_object(self):
        return get_object_or_404(self.model, name=self.request.user)

class ProfileView(DetailView):

    model = UserProfile

    template_name = 'glaceon/member/profile.html'

    slug_field = 'username'
    slug_url_kwarg = 'username'

    def get_object(self):
        # print("=====",self.request.user,"=====")
        return get_object_or_404(self.model, name=self.request.user)

class IndexView(TemplateView):
    template_name = 'glaceon/member/profile.html'