from django.shortcuts import render
from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from .models import Product, Category


def product_list(request):
    products = Product.objects.all()
    data = {'products': list(products.values())}
    return JsonResponse(data)


def product_detail(request, id):
    product = get_object_or_404(Product, id=id)
    data = {
        'id': product.id,
        'name': product.name,
        'price': product.price,
        'description': product.description,
        'count': product.count,
        'is_active': product.is_active,
        'category': product.category.name,
    }
    return JsonResponse(data)


def category_list(request):
    categories = Category.objects.all()
    data = {'categories': list(categories.values())}
    return JsonResponse(data)


def category_detail(request, id):
    category = get_object_or_404(Category, id=id)
    data = {
        'id': category.id,
        'name': category.name
    }
    return JsonResponse(data)


def products_by_category(request, id):
    category = get_object_or_404(Category, id=id)
    products = Product.objects.filter(category=category)
    data = {'products': list(products.values())}
    return JsonResponse(data)
