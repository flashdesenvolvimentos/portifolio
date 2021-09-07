var site = location.href.toString()

site = site.substring(site.lastIndexOf("/")+1)

if (site==="index.html"){
    location.href = "./index.html#home"
}

$()