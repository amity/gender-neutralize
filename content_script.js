function walk(rootNode)
{
    // Find all the text nodes in rootNode
    var walker = document.createTreeWalker(
        rootNode,
        NodeFilter.SHOW_TEXT,
        null,
        false
    ),
    node;

    // Modify each text node's value
    while (node = walker.nextNode()) {
        handleText(node);
    }
}

function handleText(textNode) {
  textNode.nodeValue = replaceText(textNode.nodeValue);
}

function replaceText(v)
{
    // General pronoun fixes
    v = v.replace(/\b(s)?he was\b/g,'they were');
    v = v.replace(/\bShe was\b/g,'They were');
    v = v.replace(/\bHe was\b/g,'They were');
    v = v.replace(/\b(s)?he has\b/g,'they have');
    v = v.replace(/\bShe has\b/g,'They have');
    v = v.replace(/\bHe has\b/g,'They have');
    v = v.replace(/\bHe's\b/g,"They're");
    v = v.replace(/\bShe's\b/g,"They're");
    v = v.replace(/\b(s)?he's\b/g,"they're");
    v = v.replace(/\bHe has\b/g,'They have');
    v = v.replace(/\bHe has\b/g,'They have');
    v = v.replace(/\bHe has\b/g,'They have');
    v = v.replace(/\bHe is\b/g,'They are');
    v = v.replace(/\bShe is\b/g,'They are');
    v = v.replace(/\b(s)?he is\b/g,'they are');
    v = v.replace(/\b(he )([\S]+)(s\b)/g,'they $2');
    v = v.replace(/\b(she )([\S]+)(s\b)/g,'they $2');
    v = v.replace(/\b(He )([\S]+)(s\b)/g,'They $2');
    v = v.replace(/\b(She )([\S]+)(s\b)/g,'They $2');
    // Imperfect below -- but "her" as subject / possessive are tough
    v = v.replace(/\bher.$/g,'them.');
    v = v.replace(/ing her\b/g,'ing them');
    v = v.replace(/\b(s)?he\b/g,'they');
    v = v.replace(/\b(s)?he\b/g,'they');
    v = v.replace(/\bHe\b/g,'They');
    v = v.replace(/\bShe\b/g,'They');
    v = v.replace(/\bhers\b/g,'theirs');
    v = v.replace(/\bHers\b/g,'Theirs');
    v = v.replace(/\bhim\b/g,'them');
    v = v.replace(/\bHim\b/g,'Them');
    v = v.replace(/\bHis\b/g,'Their');
    v = v.replace(/\bhis\b/g,'their');
    v = v.replace(/\bher\b/g,'their');
    v = v.replace(/\bHer\b/g,'Their');
    v = v.replace(/\bhimself\b/g,'themselves');
    v = v.replace(/\bherself\b/g,'themselves');

    
    // Gendered relational titles

    v = v.replace(/\bboyfriend\b/g,'partner');
    v = v.replace(/\bBoyfriend\b/g,'Partner');
    v = v.replace(/\bgirlfriend\b/g,'partner');
    v = v.replace(/\bGirlfriend\b/g,'Partner');
    v = v.replace(/\bwife\b/g,'spouse');
    v = v.replace(/\bWife\b/g,'spouse');
    v = v.replace(/\bhusband\b/g,'spouse');
    v = v.replace(/\bHusband\b/g,'Spouse');
    v = v.replace(/\bson\b/g,'child');
    v = v.replace(/\bSon\b/g,'Child');
    v = v.replace(/\bdaughter\b/g,'child');
    v = v.replace(/\bDaughter\b/g,'Child');
    v = v.replace(/\b(boy|girl)\b/g,'child');
    v = v.replace(/\b(Boy|Girl)\b/g,'Child');
    v = v.replace(/father/g,'parent');
    v = v.replace(/Father/g,'Parent');
    v = v.replace(/mother/g,'parent');
    v = v.replace(/Mother/g,'Parent');

    // Gendered professional/other titles
    v = v.replace(/\b(B|b)?usiness( )?(wo)?men\b/g,'$1usinesspeople');
    v = v.replace(/\b(B|b)?usiness( )?(wo)?man\b/g,'$1usinessperson');
    v = v.replace(/\b(P|p)olice( )?(wo)?man\b/g,'$1olice officer');
    v = v.replace(/\b(P|p)olice( )?(wo)?men\b/g,'$1olice officers');
    v = v.replace(/\b(C|c)hair( )?(wo)?man\b/g,'$1hair');
    v = v.replace(/\b(C|c)leaning lady\b/g,'$1leaner');
    v = v.replace(/\bPost( )?(wo)?man\b/g,'Mail carrier');
    v = v.replace(/\bpost( )?(wo)?man\b/g,'mail carrier');
    v = v.replace(/\bPost( )?(wo)?men\b/g,'Mail carriers');
    v = v.replace(/\bpost( )?(wo)?men\b/g,'mail carriers');
    v = v.replace(/\b(S|s)ales( )?(wo)?man\b/g,'$1alesperson');
    v = v.replace(/\b(S|s)ales( )?(wo)?men\b/g,'$1alespeople');
    v = v.replace(/\bstewardess\b/g,'flight attendant');
    v = v.replace(/\bStewardess\b/g,'Flight attendant');
    v = v.replace(/\bstewardesses\b/g,'flight attendants');
    v = v.replace(/\bStewardesses\b/g,'Flight attendants');
    v = v.replace(/\bwait(er|ress)\b/g,'server');
    v = v.replace(/\bwait(ers|resses)\b/g,'servers');
    v = v.replace(/\bWait(er|ress)\b/g,'Server');
    v = v.replace(/\bWait(ers|resses)\b/g,'Servers');
    v = v.replace(/\b(A|a)ctress\b/g,'$1ctor');
    v = v.replace(/\b(A|a)ctresses\b/g,'$1ctors');
    v = v.replace(/\b(C|c)ongress( )?(wo)?man\b/g,'Congressperson');
    v = v.replace(/\bCamera( )?(wo)?man\b/g,'Camera Operator');
    v = v.replace(/\bcamera( )?(wo)?man\b/g,'camera operator');
    v = v.replace(/\bCamera( )?(wo)?men\b/g,'Camera Operators');
    v = v.replace(/\bcamera( )?(wo)?men\b/g,'camera operators');
    v = v.replace(/\b(A|a)ssembly( )?(wo)?man\b/g,'$1ssemblyperson');
    v = v.replace(/\b(C|c)onstruction( )?(wo)?man\b/g,'$1onstruction worker');
    v = v.replace(/\b(C|c)onstruction( )?(wo)?men\b/g,'$1onstruction workers');
    v = v.replace(/\bCouncil( )?(wo)?man\b/g,'Council Member');
    v = v.replace(/\bcouncil( )?(wo)?man\b/g,'council member');
    v = v.replace(/\b(A|a)lumn(a|us)\b/g,'$1lum');
    v = v.replace(/\b(A|a)nchor( )?(Wo|wo)?man\b/g,'$1nchor');
    v = v.replace(/\brepo man\b/g,'repo agent');
    v = v.replace(/\brepo men\b/g,'repo agents');
    v = v.replace(/\b(C|c)ave( )?(wo)?man\b/g,'$1ave dweller');
    v = v.replace(/\b(C|c)ave( )?(wo)?men\b/g,'$1ave dwellers');
    v = v.replace(/\b(F|f)resh( )?men\b/g,'$1irst-years');
    v = v.replace(/\b(F|f)resh( )?man\b/g,'$1irst-year');
    v = v.replace(/\b(H|h)eroine\b/g,'$1ero');
    v = v.replace(/\b(H|h)eroines\b/g,'$1eroes');
    v = v.replace(/\b(H|h)ostesses\b/g,'$1osts');
    v = v.replace(/\b(H|h)ostess\b/g,'$1ost');
    v = v.replace(/\b(H|h)ouse( )?wife\b/g,'$1omemaker');
    v = v.replace(/\b(L|l)umber( )?(J|j)ack\b/g,'$1ogger');
    v = v.replace(/\bMaiden (N|n)ame\b/g,'Family name');
    v = v.replace(/\bmaiden (N|n)ame\b/g,'family name');
    v = v.replace(/\bMarks( )?man\b/g,'Sharpshooter');
    v = v.replace(/\bmarks( )?man\b/g,'sharpshooter');
    v = v.replace(/\bmeter( )?maid\b/g,'parking cop');
    v = v.replace(/\bMeter( )?maid\b/g,'Parking cop');
    v = v.replace(/\b(P|p)aperboy/g, '$1aper deliverer');
    v = v.replace(/\bseamstress/g,'tailor');
    v = v.replace(/\bSeamstress/g,'Tailor');
    v = v.replace(/\b(S|s)orceress/g,'$1orcerer');
    v = v.replace(/\b((G|g)arbage|(T|t)rash)( )?man/g,'$1 collector');
    v = v.replace(/\b((G|g)arbage|(T|t)rash)( )?men/g,'$1 collectors');
    v = v.replace(/\b(W|w)eather( )?(wo)?man/g,'$1eather caster');


    // Generalized terms
    v = v.replace(/\bto man\b/g,'to staff');
    v = v.replace(/\bMan( |-)to( |-)man\b/g,'Head$1to$2head');
    v = v.replace(/\bman( |-)to( |-)man\b/g,'head$1to$2head');
    v = v.replace(/\b(M|m)an( )?hole\b/g,'$1aintenance hole');
    v = v.replace(/\bMan( )?power\b/g,'Workforce');
    v = v.replace(/\bman( )?power\b/g,'workforce');
    v = v.replace(/\bMother Nature\b/g,'Nature');
    v = v.replace(/\bmother tongue(s)?\b/g,'native language$1');
    v = v.replace(/\bMother tongue(s)?\b/g,'Native language$1');
    v = v.replace(/\b(O|o)ld (W|w)ive(')?s (T|t)ale/g, 'superstition');
    v = v.replace(/\b(S|s)portsmanlike\b/g,'$1porting');



    // Base terms
    v = v.replace(/\ba (wo)?man\b/g,'an individual');
    v = v.replace(/\bA (wo)?man\b/g,'An individual');
    v = v.replace(/\bMan\b/g,'Individual');
    v = v.replace(/\bWoman\b/g,'Individual');
    v = v.replace(/man\b/g,'person');
    v = v.replace(/woman\b/g,'person');

    return v;
}

// Returns true if a node should *not* be altered in any way
function isForbiddenNode(node) {
    return node.isContentEditable || // DraftJS and many others
    (node.parentNode && node.parentNode.isContentEditable) || // Special case for Gmail
    (node.tagName && (node.tagName.toLowerCase() == "textarea" || // Some catch-alls
                     node.tagName.toLowerCase() == "input"));
}

// The callback used for the document body and title observers
function observerCallback(mutations) {
    var i, node;

    mutations.forEach(function(mutation) {
        for (i = 0; i < mutation.addedNodes.length; i++) {
            node = mutation.addedNodes[i];
            if (isForbiddenNode(node)) {
                // Should never operate on user-editable content
                continue;
            } else if (node.nodeType === 3) {
                // Replace the text for text nodes
                handleText(node);
            } else {
                // Otherwise, find text nodes within the given node and replace text
                walk(node);
            }
        }
    });
}

// Walk the doc (document) body, replace the title, and observe the body and title
function walkAndObserve(doc) {
    var docTitle = doc.getElementsByTagName('title')[0],
    observerConfig = {
        characterData: true,
        childList: true,
        subtree: true
    },
    bodyObserver, titleObserver;

    // Do the initial text replacements in the document body and title
    walk(doc.body);
    doc.title = replaceText(doc.title);

    // Observe the body so that we replace text in any added/modified nodes
    bodyObserver = new MutationObserver(observerCallback);
    bodyObserver.observe(doc.body, observerConfig);

    // Observe the title so we can handle any modifications there
    if (docTitle) {
        titleObserver = new MutationObserver(observerCallback);
        titleObserver.observe(docTitle, observerConfig);
    }
}
walkAndObserve(document);
