---
title: Jekyll for GitHub pages
layout: 2017/sheet
category: Jekyll
tags: [WIP]
updated: 2017-08-26
---

Jekyll
------

* jekyll-avatar
* jekyll-coffeescript
* jekyll-default-layout
* jekyll-feed
* jekyll-gist
* jekyll-github-metadata
* jekyll-mentions
* jekyll-optional-front-matter
* jekyll-paginate
* jekyll-readme-index
* jekyll-redirect-from
* jekyll-relative-links
* jekyll-sass-converter
* jekyll-seo-tag
* jekyll-sitemap

As of github-pages v156. For an updated list, see: [Dependency versions](https://pages.github.com/versions/) _(pages.github.com)_

GitHub Metadata
---------------

### Configuration

```yaml
plugins:
  - jekyll-github-metadata

repository: username/project
```

Put this in your `_config.yml`.
See: [Repository metadata on GitHub pages](https://help.github.com/articles/repository-metadata-on-github-pages/)

### Listing repos

```html
<a href='{{ repository.html_url }}'>
  {{ repository.name }}
</a>
```

### Link to repo

```html
<a href='{{ site.github.repository_url }}'>
  {{ site.github.project_title }}
</a>
```

Gists
-----

### Configuration

```yaml
plugins:
  - jekyll-gist
```

See: [jekyll-gist](https://github.com/jekyll/jekyll-gist)

### Usage

```js
```

This places a Gist in your page.

Mentions
--------

### Configuration

```yaml
plugins:
  - jekyll-mentions
```

See: [jekyll-mentions](https://github.com/jekyll/jekyll-mentions)

### Usage

```js
Hey @rstacruz, what do you think of this?
```

Just mention anyone in any page. Their names will be turned into links.

Redirects
---------

### Configuration

```yaml
plugins:
    - jekyll-redirect-from
```

See: [jekyll-redirect-from](https://rubygems.org/gems/jekyll-redirect-from)

### Usage

```yaml
---
redirect_from:
  - /foo
---
```

Place on any page.

### Redirecting

```yaml
---
redirect_to:
  - /foo
---
```

Place on any page.
See: [redirect to](https://github.com/jekyll/jekyll-redirect-from#redirect-to)
