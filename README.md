<div class="markdown-body">

# capacitor-docgen-format

This little postprocessor for [`@capacitor/docgen`](https://github.com/ionic-team/capacitor-docgen) makes the following changes to the formatting:

- Left aligns all table headers
- Reformats the method index to not be a bullet list
- Removes the \<code> style from values in table cells

## Installation

```shell
pnpm add -D github:aparajita/capacitor-docgen-format
```

This will install a `docgen-format` binary.

## Usage

Add a call to `docgen-format` somewhere in your package scripts. For example:

```json
{
  "scripts": {
    "docgen": "docgen && docgen-format"
  }
}
```

</div>
