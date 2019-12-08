from django.urls import path
from .views import CourseDetailView, LoadmaplView

urlpatterns = [
    path('', LoadmaplView.as_view(), name='index'),
    path('detail/<slug:course_slug>/', CourseDetailView.as_view(), name="detail")
]
