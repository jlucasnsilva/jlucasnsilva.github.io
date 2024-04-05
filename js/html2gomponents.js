function html2gomponents(inID, outID) {
    const translation = {
        svg: {
            "clip-rule": "ClipRule",
            d: "D",
            fill: "Fill",
            "fill-rule": "FillRule",
            path: "Path",
            svg: "SVG",
            stroke: "Stroke",
            "stroke-width": "StrokeWidth",
            viewBox: "ViewBox",
        },

        alpine: {
            "x-bind": "Bind",
            "x-cloak": "Cloak",
            "x-data": "Data",
            "x-effect": "Effect",
            "x-for": "For",
            "x-html": "HTML",
            "x-if": "If",
            "x-ignore": "Ignore",
            "x-init": "Init",
            "x-model": "Model",
            "x-on": "On",
            "x-ref": "Ref",
            "x-show": "Show",
            "x-text": "Text",
            "x-transition": "Transition",
        },

        html: {
            a: "A",
            abbr: "Abbr",
            accept: "Accept",
            action: "Action",
            address: "Address",
            alt: "Alt",
            area: "Area",
            aria: "Aria",
            article: "Article",
            as: "As",
            aside: "Aside",
            async: "Async",
            audio: "Audio",
            autocomplete: "AutoComplete",
            autofocus: "AutoFocus",
            autoplay: "AutoPlay",
            b: "B",
            base: "Base",
            blockquote: "BlockQuote",
            body: "Body",
            br: "Br",
            button: "Button",
            canvas: "Canvas",
            caption: "Caption",
            charset: "Charset",
            checked: "Checked",
            cite: "Cite",
            class: "Class",
            code: "Code",
            col: "Col",
            colgroup: "ColGroup",
            colspan: "ColSpan",
            cols: "Cols",
            content: "Content",
            controls: "Controls",
            dataattr: "DataAttr",
            datael: "DataEl",
            datalist: "DataList",
            dd: "Dd",
            defer: "Defer",
            del: "Del",
            details: "Details",
            dfn: "Dfn",
            dialog: "Dialog",
            disabled: "Disabled",
            div: "Div",
            dl: "Dl",
            doctype: "Doctype",
            dt: "Dt",
            em: "Em",
            embed: "Embed",
            enctype: "EncType",
            fieldset: "FieldSet",
            figcaption: "FigCaption",
            figure: "Figure",
            footer: "Footer",
            for: "For",
            formattr: "FormAttr",
            formel: "FormEl",
            h1: "H1",
            h2: "H2",
            h3: "H3",
            h4: "H4",
            h5: "H5",
            h6: "H6",
            hgroup: "HGroup",
            html: "HTML",
            head: "Head",
            header: "Header",
            height: "Height",
            hr: "Hr",
            href: "Href",
            i: "I",
            id: "ID",
            iframe: "IFrame",
            img: "Img",
            input: "Input",
            ins: "Ins",
            kbd: "Kbd",
            label: "Label",
            lang: "Lang",
            legend: "Legend",
            li: "Li",
            link: "Link",
            loading: "Loading",
            loop: "Loop",
            main: "Main",
            mark: "Mark",
            max: "Max",
            maxlength: "MaxLength",
            menu: "Menu",
            meta: "Meta",
            meter: "Meter",
            method: "Method",
            min: "Min",
            minlength: "MinLength",
            multiple: "Multiple",
            muted: "Muted",
            name: "Name",
            nav: "Nav",
            noscript: "NoScript",
            object: "Object",
            ol: "Ol",
            optgroup: "OptGroup",
            option: "Option",
            p: "P",
            param: "Param",
            pattern: "Pattern",
            picture: "Picture",
            placeholder: "Placeholder",
            playsinline: "PlaysInline",
            poster: "Poster",
            pre: "Pre",
            preload: "Preload",
            progress: "Progress",
            q: "Q",
            readonly: "ReadOnly",
            rel: "Rel",
            required: "Required",
            role: "Role",
            rowspan: "RowSpan",
            rows: "Rows",
            s: "S",
            svg: "SVG",
            samp: "Samp",
            script: "Script",
            section: "Section",
            select: "Select",
            selected: "Selected",
            small: "Small",
            source: "Source",
            span: "Span",
            src: "Src",
            srcset: "SrcSet",
            step: "Step",
            strong: "Strong",
            styleattr: "StyleAttr",
            styleel: "StyleEl",
            sub: "Sub",
            summary: "Summary",
            sup: "Sup",
            tbody: "TBody",
            tfoot: "TFoot",
            thead: "THead",
            tabindex: "TabIndex",
            table: "Table",
            target: "Target",
            td: "Td",
            textarea: "Textarea",
            th: "Th",
            time: "Time",
            titleattr: "TitleAttr",
            titleel: "TitleEl",
            tr: "Tr",
            type: "Type",
            u: "U",
            ul: "Ul",
            value: "Value",
            var: "Var",
            video: "Video",
            wbr: "Wbr",
            width: "Width",
        },

        htmx: {
            "hx-boost": "Boost",
            "data-hx-boost": "Boost",
            "hx-confirm": "Confirm",
            "data-hx-confirm": "Confirm",
            "hx-delete": "Delete",
            "data-hx-delete": "Delete",
            "hx-disable": "Disable",
            "data-hx-disable": "Disable",
            "hx-disabledelt": "DisabledElt",
            "data-hx-disabled-elt": "DisabledElt",
            "hx-disinherit": "Disinherit",
            "data-hx-disinherit": "Disinherit",
            "hx-encoding": "Encoding",
            "data-hx-encoding": "Encoding",
            "hx-ext": "Ext",
            "data-hx-ext": "Ext",
            "hx-get": "Get",
            "data-hx-get": "Get",
            "hx-headers": "Headers",
            "data-hx-headers": "Headers",
            "hx-history": "History",
            "data-hx-history": "History",
            "hx-history-elt": "HistoryElt",
            "data-hx-history-elt": "HistoryElt",
            "hx-include": "Include",
            "data-hx-include": "Include",
            "hx-indicator": "Indicator",
            "data-hx-indicator": "Indicator",
            "hx-on": "On",
            "data-hx-on": "On",
            "hx-params": "Params",
            "data-hx-params": "Params",
            "hx-patch": "Patch",
            "data-hx-patch": "Patch",
            "hx-post": "Post",
            "data-hx-post": "Post",
            "hx-preserve": "Preserve",
            "data-hx-preserve": "Preserve",
            "hx-prompt": "Prompt",
            "data-hx-prompt": "Prompt",
            "hx-pushurl": "PushURL",
            "data-hx-pushurl": "PushURL",
            "hx-put": "Put",
            "data-hx-put": "Put",
            "hx-replace-url": "ReplaceURL",
            "data-hx-replace-url": "ReplaceURL",
            "hx-request": "Request",
            "data-hx-request": "Request",
            "hx-select": "Select",
            "data-hx-select": "Select",
            "hx-select-oob": "SelectOOB",
            "data-hx-select-oob": "SelectOOB",
            "hx-swap": "Swap",
            "data-hx-swap": "Swap",
            "hx-swap-oob": "SwapOOB",
            "data-hx-swap-oob": "SwapOOB",
            "hx-sync": "Sync",
            "data-hx-sync": "Sync",
            "hx-target": "Target",
            "data-hx-target": "Target",
            "hx-trigger": "Trigger",
            "data-hx-trigger": "Trigger",
            "hx-validate": "Validate",
            "data-hx-validate": "Validate",
            "hx-vals": "Vals",
            "data-hx-vals": "Vals",
        },
    };

    const namespaces = {
        svg: "svg",
        html: "h",
        alpine: "alpine",
        htmx: "hx",
    };

    const parser = new DOMParser();

    function getTranslation(name, value) {
        let n = name;
        let m = "";
        if (name.includes(":")) {
            const s = name.split(":");
            n = s[0];
            m = s[1];
        }

        const keys = ["html", "htmx", "alpine", "svg"];
        for (let key of keys) {
            const ns = namespaces[key];
            let res = translation[key][n];

            if (res) {
                if (!value) {
                    return `${ns}.${res}`;
                }
                if (m) {
                    return `${ns}.${res}("${m}", "${value}")`;
                }
                return `${ns}.${res}("${value}")`;
            }
        }
        return `${namespaces["html"]}.Attr("${name}", "${value}")`;
    }

    const PAD = "    ";
    const EOL = "\n";

    function newStringBuilder(...init) {
        const builder = [...init];
        return {
            add(...elems) {
                for (let el of elems) {
                    builder.push(el);
                }
            },
            string() {
                return builder.join("");
            },
        };
    }

    const ignoredNodes = [
        Node.CDATA_SECTION_NODE,
        Node.PROCESSING_INSTRUCTION_NODE,
        Node.COMMENT_NODE,
    ];

    function tr(root, pad = "", builder = newStringBuilder()) {
        const childPad = `${pad}${PAD}`;
        for (let child of root.childNodes) {
            if (ignoredNodes.includes(child.nodeType)) {
                continue;
            }

            if (child.nodeType === Node.TEXT_NODE) {
                let txt = child.wholeText;
                if (!txt) {
                    continue;
                }

                txt = txt.trim();
                if (txt) {
                    builder.add(pad, `g.Text("${txt}"),`, EOL);
                }
                continue;
            }

            const attributes = child.attributes;
            builder.add(pad, getTranslation(child.nodeName.toLowerCase()), "(", EOL);

            if (attributes && attributes.length > 0) {
                const count = attributes.length;
                for (let i = 0; i < count; i++) {
                    const item = attributes.item(i);
                    builder.add(
                        childPad,
                        getTranslation(item.name, item.value),
                        ",",
                        EOL,
                    );
                }
            }

            tr(child, childPad, builder);
            builder.add(pad, ")", pad == "" ? "" : ",", EOL); // tag
        }
    }

    function convert(root) {
        const builder = newStringBuilder();
        tr(root, "", builder);
        return builder.string();
    }

    const text = document.getElementById(inID).value;
    const doc = parser.parseFromString(text, "text/html").body;
    const result = convert(doc);

    console.log(result);

    document.getElementById(outID).value = result;
}

const text = `<details class="dropdown">
  <summary class="m-1 btn">open or close</summary>
  <ul class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
  <p>
    Hello <br /> world!
  </p>
</details>`;
