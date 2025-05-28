[
    // Define contexts for use
    // Use `> Inspect Editor Tokens and Scopes`	to	find	out	what	context	you're	in

    // Visual
    {trigger: "U", replacement: "underbrace(${VISUAL}, $0)", options: "mA", description: "underbrace()"},
    {trigger: "O", replacement: "overbrace( ${VISUAL}, $1)", options: "imA", description: "overbrace()"},
    {trigger: "C", replacement: "cancel( ${VISUAL} )", options: "mA"},
    {trigger: "S", replacement: "sqrt( ${VISUAL} )", options: "mA"},
    
    // Math mode
    {trigger: "mk", replacement: "$$0$", options: "tA", description: "Inline Math"},
    {trigger: /(\$[" "])(\.|\,|\?|\-)/, replacement: "$[[1]] $0", options: "iwA", description: "Auto formatting after Inline Math"},
    {trigger: "dm", replacement: "$$\n$0\n$$$1",	options: "tA", description: "Display Math"},
    
    // Greek letters
    {trigger: ";a", replacement: "alpha", options: "mA"},
    {trigger: ";b", replacement: "beta", options: "mA"},
    {trigger: ";c", replacement: "chi", options: "mA"},
    {trigger: ";C", replacement: "Chi", options: "mA"},
    {trigger: ";g", replacement: "gamma", options: "mA"},
    {trigger: ";G", replacement: "Gamma", options: "mA"},
    {trigger: ";d", replacement: "delta", options: "mA"},
    {trigger: ";D", replacement: "Delta", options: "mA"},
    {trigger: ";e", replacement: "epsilon", options: "mA"},
    {trigger: ";E", replacement: "Epsilon", options: "mA"},
    {trigger: ";;e", replacement: "eta", options: "mA"},
    {trigger: ";;E", replacement: "Eta", options: "mA"},
    {trigger: ";z", replacement: "zeta", options: "mA"},
    {trigger: ";t", replacement: "theta", options: "mA"},
    {trigger: ";T", replacement: "Theta", options: "mA"},
    {trigger: ":t", replacement: "vartheta", options: "mA"},
    {trigger: ";i", replacement: "iota", options: "mA"},
    {trigger: ";k", replacement: "kappa", options: "mA"},
    {trigger: ";l", replacement: "lambda", options: "mA"},
    {trigger: ";L", replacement: "Lambda", options: "mA"},
    {trigger: ";r", replacement: "rho", options: "mA"},
    {trigger: ";R", replacement: "Rho", options: "mA"},
    {trigger: ";s", replacement: "sigma", options: "mA"},
    {trigger: ";S", replacement: "Sigma", options: "mA"},
    {trigger: ";;t", replacement: "tau", options: "mA"},
    {trigger: ";;T", replacement: "Tau", options: "mA"},
    {trigger: ";u", replacement: "upsilon", options: "mA"},
    {trigger: ";U", replacement: "Upsilon", options: "mA"},
    {trigger: ";o", replacement: "omega", options: "mA"},
    {trigger: ";O", replacement: "Omega", options: "mA"},
    {trigger: ";p", replacement: "phi", options: "mA"},
    {trigger: ";P", replacement: "Phi", options: "mA"},
    {trigger: ";;p", replacement: "psi", options: "mA"},
    {trigger: ";;P", replacement: "Psi", options: "mA"},
    {trigger: "ome", replacement: "omega", options: "mA"},
    {trigger: "Ome", replacement: "Omega", options: "mA"},

    // Delimiters
    {trigger: /(.?)(\()/, replacement: "[[0]]($0)", options: "imA", description: "()"},
    {trigger: /(.?)(\[)/, replacement: "[[0]][$0]", options: "imA", description: "[]"},
    {trigger: /(.?)(\{)/, replacement: "[[0]]{$0}", options: "imA", description: "{}"},
    {trigger: /([^\w]|^)(\")/, replacement: "[[0]]\"$0\"", options: "itA",  description: "quote"},
    {trigger: /(\"\")/, replacement: "\"$0\"", options: "imA", description: "quote", priority: 500},
    {trigger: /(.?)(\")/, replacement: "[[0]]\"$0\"", options: "imA", description: "quote"},

    {trigger: "<>", replacement: "angle.l $0 angle.r $1", options: "mA"},
    {trigger: "abs", replacement: "abs($0)", options: "mA", description: "abs"},
    {trigger: "tp", replacement: "^(${1:3})", options: "mA", description: "to the ... power"},
    {trigger: "sr", replacement: "^2", options: "mA", description: "^2"},
    {trigger: "invs", replacement: "^(-1)", options: "mA", description: "^(-1)"},
    {trigger: "compl", replacement: "^(complement)", options: "mA", description: "^(complement)"},

    // Subscript
    {trigger: /(.?)(\_)/, replacement: "[[0]]_($0)$1", options: "mA", description: "subscript", priority: 500},
    {trigger: /([A-Za-z\)]|\')( _) /, replacement: "[[0]]_", options: "mA", description: "Auto close space for subscript", priority: 500},
    {trigger: /([A-Za-z\)]|\')(\d)/, replacement: "[[0]]_[[1]]", options: "mA", description: "Auto subscript", priority: 500},
    {trigger: /([A-Za-z\)]|\')_(\d{2})/, replacement: "[[0]]_([[1]])", options: "mA", description: "Auto subscript", priority: 500},
    {trigger: /(?<![A-Za-z])([A-Za-z])([A-Za-z])\2/, replacement: "[[0]]_[[1]]", options: "mA", description: "Auto subscript for greek letter", priority: 500},
    {trigger: /(')([A-Za-z])\2/, replacement: "[[0]]_[[1]]", options: "mA", description: "Auto subscript for prime symbol", priority: 500},
    {trigger: /(\)|${GREEK})([A-Za-z])\2/, replacement: "[[0]]_[[1]]", options: "mA", description: "Auto subscript for greek letter", priority: 500},

    // Accent
    {trigger: /(?<![A-Za-z])([A-Za-z01])(grave|acute|hat|tilde|macron|breve|dot|diaer|circle|caron|vec|upright|italic|bo|sans|frak|mono|cal|ov)/, replacement: (m) => {
        const map = {"vec": "arrow", "bo": "bold", "ov": "overline" };
        return (map[m[2]] || m[2]) + "(" + m[1] + ")";
    }, options: "mA", description: "hat"},

    {trigger: /(${GREEK})(grave|acute|hat|tilde|macron|breve|dot|diaer|circle|caron|vec|upright|italic|bo|sans|frak|mono|cal|ov)/, replacement: (m) => {
        const map = {"vec": "arrow", "bo": "bold", "ov": "overline" };
        return (map[m[2]] || m[2]) + "(" + m[1] + ")";
    }, options: "mA", description: "hat"},
    
    {trigger: /((grave|acute|hat|tilde|macron|breve|dot|dot\.double|dot\.triple|dot\.quad|diaer|circle|acute\.double|caron|arrow|arrow\.l|upright|italic|bold|sans|frak|mono|bb|cal|overline)\([a-zA-Z\d]+\))(grave|acute|hat|tilde|macron|breve|dot|diaer|circle|caron|vec|upright|italic|bo|sans|frak|mono|cal|ov)/, replacement: (m) => {
        const map = {"vec": "arrow", "bo": "bold", "ov": "overline" };
        return (map[m[3]] || m[3]) + '(' + m[1] + ')'
    }, options: "mA", description: "hat"},

    {trigger: /((grave|acute|hat|tilde|macron|breve|dot|dot\.double|dot\.triple|dot\.quad|diaer|circle|acute\.double|caron|arrow|arrow\.l|upright|italic|bold|sans|frak|mono|bb|cal|overline)\([a-zA-Z\d]+\))(grave|acute|hat|tilde|macron|breve|dot|diaer|circle|caron|vec|upright|italic|bo|sans|frak|mono|cal|ov)/, replacement: (m) => {
        const map = {"vec": "arrow", "bo": "bold", "ov": "overline" };
        return (map[m[3]] || m[3]) + '(' + m[1] + ')'
    }, options: "mA", description: "hat"},

    // Arrow
    {trigger: "iff", replacement: "<=>", options: "wmA", description: "<=>", priority: 2},
    {trigger: /(^|\s\s+)(=>|<=>)/, replacement: " [[0]][[1]]&&$0", options: "bmA", description: "Auto align for arrow", priority: 500},
    {trigger: /(^|\s\s+)(=>|<=>)(&|&&)(  )/, replacement: (m) => {
        const map = {"&": "&&", "&&": "&"};
        return m[0] + m[1] +  map[m[3]] + ' ';
    }, options: "bmA", description: "Change align for arrow"},

    // Set Symbol
    //{trigger: "set", replacement: "{$0}", options: "imA", description: "set"},
    {trigger: "cc", replacement: "subset", options: "mA", description: "subset"},
    {trigger: /\\(u)/, replacement: "union.big", options: "imA", description: "union.big"},
    {trigger: /\\(n)/, replacement: "sect.big", options: "imA", description: "sect.big"},
    {trigger: /(subset|supset)(=| =)/, replacement: "[[0]].eq $0", options: "imA", description: "csubset"},
    {trigger: "notin", replacement: "in.not", options: "imA", description: "in.not"},

    // Relation Symbol
    //--------------------relation symbol
    {trigger: "==", replacement: "=&", options: "imA", description: "=&"},
    {trigger: /(^|\s\s+)(=|>|<|<=|>=)( )/, replacement: "[[0]][[1]]& $0", options: "imA", description: "Auto align for equal"},
    {trigger: /(\& )(=|>|<|<=|>=)/, replacement: "[[0]][[1]]& $0", options: "imA", description: "Auto align for equal"},

    //Arithmetic Symbol
    {trigger: "sq", replacement: "sqrt($0)", options: "imA", description: "sqrt()"},
    {trigger: "rt", replacement: "root(${0:n}, $1)", options: "imA", description: "root()"},
    {trigger: "+-", replacement: "plus.minus", options: "imA", description: "plus.minus"},
    {trigger: "-+", replacement: "minus.plus", options: "imA", description: "minus.plus"},
    {trigger: "infi", replacement: "infinity", options: "imA", description: "infinity"},

    // Calculus Symbol
    {trigger: "lim", replacement: "lim_(${1:n} -> oo) $0", options: "imA", description: "limit"},
    {trigger: "lsup", replacement: "limsup_(${1:n} -> oo) $0", options: "imA", description: "limsup"},
    {trigger: "linf", replacement: "liminf_(${1:n} -> oo) $0", options: "imA", description: "liminf"},
    //{trigger: /d([A-Za-z])( )/, replacement: "dif [[0]][[1]]", options: "imA", description: "Auto dif"},
    {trigger: /d(${GREEK})( |\\)/, replacement: "dif [[0]][[1]]", options: "imA", description: "Auto dif"},
    {trigger: "der", replacement: "(dif ${1:y})/(dif ${3:x})", options: "imA", description: "derive"},
    {trigger: "dder", replacement: "(dif^2 ${1:y})/(dif ${3:x}^2)", options: "imA", description: "derive"},
    {trigger: "par", replacement: "(diff ${1:y})/(diff ${3:x})", options: "imA", description: "partial"},
    {trigger: "ppar", replacement: "(diff^2 ${1:y})/(diff ${3:x}^2)", options: "imA", description: "partial"},
    {trigger: "int", replacement: "integral", options: "imA", description: "integral"},

    // Align & Space
    {trigger: /(^|\s\s+)( )/, replacement: "[[0]]& $0", options: "bmA", description: "Auto add align", priority: 500},
    //{trigger: /(^|\s+)(&|&&)(  )/, replacement: (m) => {
     //   const map = {"&": "&& ", "&&": ""};
     //   return m[0] + map[m[1]];
    //}, options: "bmA", description: "Auto change align"},
    {trigger: /(\S)(  )/, replacement: "[[0]] quad $0", options: "bmA", description: "quad"},

    // Other
    {trigger: "...c", replacement: "dots.c", options: "imA", description: "dots.c"},
    {trigger: /([^\,\s])( |)(\.\.\.)/, replacement: "[[0]] dots.c $0", options: "imA", description: "Auto dots.c"}
]