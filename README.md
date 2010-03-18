Bundlr
======
Bundlr is a module used to return a non JS asset from a given path. Bundlr
will also build virtual assets such as [haml,markdown,sass, etc...].

Virtual Assets
==============
Virtual assets are defined in your package.json file.

		{
			// regular bundle properties
			// .....
			"bundle-assets": {
				"stylesheet.css": "sass",
				"site.html":      "haml",
				"other.html":     "markdown"
			}
		}
		
Builders
========
Builders build virtual assets. The builders are specified in your package.json

		{
			// regular bundle properties...
			// virtual asset defs...
			"builders": {
				"haml": "bundle:builders/haml",
				"markdown": "bundle:builders/markdown"
			}
		}