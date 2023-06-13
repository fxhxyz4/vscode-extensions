const extensions = [
	"Sitrusy.90s-anime",
	"jvitorfrancisco.theme-acid-purple",
	"animetheme.animetheme",
	"iliazeus.vscode-ansi",
	"mrmlnc.vscode-apache",
	"formulahendry.auto-close-tag",
	"steoates.autoimport",
	"formulahendry.auto-rename-tag",
	"mrmlnc.vscode-autoprefixer",
	"teabyii.ayu",
	"faceair.ayu-one-dark",
	"mgmcdermott.vscode-language-babel",
	"Katsute.code-background",
	"mads-hartmann.bash-ide-vscode",
	"aaron-bond.better-comments",
	"AnbuselvanRocky.bootstrap5-vscode",
	"Zaczero.bootstrap-v4-snippets",
	"ms-vscode.cpptools",
	"ms-vscode.cpptools-extension-pack",
	"ms-vscode.cpptools-themes",
	"amiralizadeh9480.cpp-helper",
	"zitup.classnametocss",
	"Compulim.compulim-vscode-closetag",
	"twxs.cmake",
	"ms-vscode.cmake-tools",
	"formulahendry.code-runner",
	"streetsidesoftware.code-spell-checker",
	"CoderCoder.codercoder-dark-theme",
	"naumovs.color-highlight",
	"bierner.color-info",
	"anseki.vscode-color",
	"qingpeng.common-lisp",
	"Equinusocio.vsc-community-material-theme",
	"pranaygp.vscode-css-peek",
	"webfreak.cute-theme",
	"breadStick.cute-theme",
	"Thomaz.preparing",
	"AaronYoung.dark-synthwave-vscode",
	"firefox-devtools.vscode-firefox-debug",
	"redhat.fabric8-analytics",
	"ms-vscode-remote.remote-containers",
	"icrawl.discord-vscode",
	"ms-azuretools.vscode-docker",
	"unthrottled.doki-theme",
	"mikestead.dotenv",
	"diz.ecsstractor-port",
	"EditorConfig.EditorConfig",
	"DigitalBrainstem.javascript-ejs-support",
	"carbonid1.emmet-jss",
	"usernamehw.errorlens",
	"rodrigovallades.es7-react-js-snippets",
	"dsznajder.es7-react-js-snippets",
	"dbaeumer.vscode-eslint",
	"tamasfe.even-better-toml",
	"melishev.feather-vscode",
	"mhutchie.git-graph",
	"ms-dotnettools.csharp",
	"Unity.unity-debug",
	"Tobiah.unity-tools",
	"kleber-swf.unity-code-snippets",
	"bigmogician.xdml-vscode",
	"unoplatform.vscode",
	"donjayamanne.githistory",
	"felipecaputo.git-project-manager",
	"github.vscode-github-actions",
	"GitHub.copilot",
	"GitHub.vscode-pull-request-github",
	"evzen-wybitul.magic-racket",
	"GitHub.github-vscode-theme",
	"eamodio.gitlens",
	"golang.go",
	"golang.go-nightly",
	"jinliming2.vscode-go-template",
	"lior-chamla.google-fonts",
	"znck.grammarly",
	"orsenkucher.vscode-graphql",
	"andrejunges.Handlebars",
	"ivangabriele.vscode-heroku",
	"pkosta2005.heroku-command",
	"ecmel.vscode-html-css",
	"solnurkarim.html-to-css-autocompletion",
	"bradgashler.htmltagwrap",
	"kisstkondoros.vscode-gutter-previe",
	"wix.vscode-import-cost",
	"oderwat.indent-rainbow",
	"VisualStudioExptTeam.vscodeintellicode",
	"VisualStudioExptTeam.intellicode-api-usage-example",
	"Zignd.html-css-class-completion",
	"ms-python.isort",
	"xabikos.JavaScriptSnippets",
	"Orta.vscode-jest",
	"ms-toolsai.jupyter",
	"ms-toolsai.vscode-jupyter-cell-tags",
	"ms-toolsai.jupyter-keymap",
	"ms-toolsai.jupyter-renderers",
	"ms-toolsai.vscode-jupyter-slideshow",
	"ms-kubernetes-tools.vscode-kubernetes-tools",
	"James-Yu.latex-workshop",
	"dt.ghlink",
	"bierner.lit-html",
	"ms-vscode.live-server",
	"jaheenafsarsyed.live-pug-compiler",
	"glenn2223.live-sass",
	"ritwickdey.LiveServer",
	"negokaz.live-server-preview",
	"ms-vsliveshare.vsliveshare",
	"Tyriar.luna-paint",
	"ms-vscode.makefile-tools",
	"bierner.markdown-checkbox",
	"bierner.markdown-emoji",
	"bierner.markdown-preview-github-styles",
	"DavidAnson.vscode-markdownlint",
	"PKief.material-icon-theme",
	"Equinusocio.vsc-material-theme",
	"equinusocio.vsc-material-theme-icons",
	"unifiedjs.vscode-mdx",
	"ms-edgedevtools.vscode-edge-devtools",
	"astro-build.astro-vscode",
	"xenolithe.miku",
	"monokai.theme-monokai-pro-vscode",
	"PulkitGangwar.nextjs-snippets",
	"herrmannplatz.npm-dependency-links",
	"christian-kohler.npm-intellisense",
	"christian-kohler.path-intellisense",
	"ms-vscode.powershell",
	"esbenp.prettier-vscode",
	"rvest.vs-code-prettier-eslint",
	"inferrinizzard.prettier-sql-vscode",
	"yuichinukiyama.vscode-preview-server",
	"amandeepmittal.pug",
	"ms-python.vscode-pylance",
	"twixes.pypi-assistant",
	"sketchbuch.vsc-quokka-statusbar",
	"mechatroner.rainbow-csv",
	"voldemortensen.rainbow-tags",
	"msjsdiag.vscode-react-native",
	"EQuimper.react-native-react-redux",
	"unifiedjs.vscode-remark",
	"ms-vscode-remote.remote-ssh",
	"ms-vscode-remote.remote-ssh-edit",
	"ms-vscode.remote-explorer",
	"humao.rest-client",
	"MS-CEINTL.vscode-language-pack-ru",
	"moritanian.safety-background",
	"wicked-labs.astro-theme",
	"syler.sass-indented",
	"Wscats.eno",
	"timonwong.shellcheck",
	"sysoev.language-stylus",
	"fivethree.vscode-svelte-snippets",
	"svelte.svelte-vscode",
	"ardenivanov.svelte-intellisense",
	"jock.svg",
	"SimonSiefke.svg-preview",
	"RobbOwen.synthwave-vscode",
	"webrender.synthwave-x-fluoromachine",
	"bradlc.vscode-tailwindcss",
	"Zarifprogrammer.tailwind-snippets",
	"meganrogge.template-string-converter",
	"wayou.vscode-todo-highlight",
	"shardulm94.trailing-spaces",
	"ms-vscode.vscode-typescript-tslint-plugin",
	"rbbit.typescript-hero",
	"sazumiviki.uwu-theme-kawai",
	"mangeshrex.uwu",
	"FinnLinn.uwustyl",
	"pflannery.vscode-versionlens",
	"octref.vetur",
	"vscode-icons-team.vscode-icons",
	"CelianRiboulet.webvalidator",
	"DriftAsimov.waifuwu",
	"WakaTime.vscode-wakatime",
	"ms-vscode-remote.remote-wsl",
	"redhat.vscode-xml",
	"mikeburgh.xml-format",
	"DotJoshJohnson.xml",
	"redhat.vscode-yaml",
	"Valkyrihane.zero",
	"gokimax.zerotwo-theme",
	"shalldie.background",
];

module.exports = extensions;
