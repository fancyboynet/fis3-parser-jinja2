# fis3-parser-jinja2

fis3扩展jinja2模板

## 安装

    $ npm install fis3-parser-jinja2 --save

## 基本使用

    fis.match('*.html', {
      parser: fis.plugin('jinja2', {
        namespace : 'www'
      })
    });

## 涉及到的标签

    {% fis_framework 'static/lib/mod.js' %}
    {% extends 'page/template.html' %}
    {% include 'widget/a.html' %}
    {% fis_load './style.css' %}
    {% fis_uri 'page/demo/demo.html' %}