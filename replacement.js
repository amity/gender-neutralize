// Primary replacement function. Parameter node, returns replacement text.
function neutralizeNode(node) {
  text = node.nodeValue;
  // If text -- already should be the case, but just in case.
  if (node.nodeType === 3) {
    text = text.replace(/\b(s)?he was\b/g, "they were");
    text = text.replace(/\bShe was\b/g, "They were");
    text = text.replace(/\bHe was\b/g, "They were");
    text = text.replace(/\b(s)?he has\b/g, "they have");
    text = text.replace(/\bShe has\b/g, "They have");
    text = text.replace(/\bHe has\b/g, "They have");
    text = text.replace(/\bHe's\b/g, "They're");
    text = text.replace(/\bShe's\b/g, "They're");
    text = text.replace(/\b(s)?he's/g, "they're");
    text = text.replace(/\bHe has\b/g, "They have");
    text = text.replace(/\bHe has\b/g, "They have");
    text = text.replace(/\bHe has\b/g, "They have");
    text = text.replace(/\bHe is\b/g, "They are");
    text = text.replace(/\bShe is\b/g, "They are");
    text = text.replace(/\b(s)?he is\b/g, "they are");
    text = text.replace(/\b(s)?he ([^ ]+)(s\b)/, "they $2");
    text = text.replace(/\bShe ([^ ]+)(s\b)/, "They $2");
    text = text.replace(/\bHe ([^ ]+)(s\b)/, "They $2");
    // Imperfect below -- but "her" as subject / possessive are tough
    text = text.replace(/\bher$/g, "them");
    text = text.replace(/ing her\b/g, "ing them");
    text = text.replace(/\b(s)?he\b/g, "they");
    text = text.replace(/\b(s)?he\b/g, "they");
    text = text.replace(/\bHe\b/g, "They");
    text = text.replace(/\bShe\b/g, "They");
    text = text.replace(/\bhers\b/g, "theirs");
    text = text.replace(/\bHers\b/g, "Theirs");
    text = text.replace(/\bhim\b/g, "them");
    text = text.replace(/\bHim\b/g, "Them");
    text = text.replace(/\bHis\b/g, "Their");
    text = text.replace(/\bhis\b/g, "their");
    text = text.replace(/\bher\b/g, "their");
    text = text.replace(/\bHer\b/g, "Their");
    text = text.replace(/\bhimself\b/g, "themselves");
    text = text.replace(/\bherself\b/g, "themselves");

    // Gendered relational titles
    text = text.replace(/\bboyfriend\b/g, "partner");
    text = text.replace(/\bBoyfriend\b/g, "Partner");
    text = text.replace(/\bgirlfriend\b/g, "partner");
    text = text.replace(/\bGirlfriend\b/g, "Partner");
    text = text.replace(/\bwife\b/g, "spouse");
    text = text.replace(/\bWife\b/g, "spouse");
    text = text.replace(/\bhusband\b/g, "spouse");
    text = text.replace(/\bHusband\b/g, "Spouse");
    text = text.replace(/\bson\b/g, "child");
    text = text.replace(/\bSon\b/g, "Child");
    text = text.replace(/daughter\b/g, "child");
    text = text.replace(/\bDaughter\b/g, "Child");
    text = text.replace(/\bboys\b/g, "young people");
    text = text.replace(/\bBoys\b/g, "Young people");
    text = text.replace(/\bboy\b/g, "young person");
    text = text.replace(/\bBoy\b/g, "Young person");
    text = text.replace(/\bgirls\b/g, "young people");
    text = text.replace(/\bGirls\b/g, "Young people");
    text = text.replace(/\bgirl\b/g, "young person");
    text = text.replace(/\bGirl\b/g, "Young person");
    text = text.replace(/father/g, "parent");
    text = text.replace(/Father/g, "Parent");
    text = text.replace(/mother/g, "parent");
    text = text.replace(/Mother/g, "Parent");
    text = text.replace(/brother/g, "sibling");
    text = text.replace(/Brother/g, "Sibling");
    text = text.replace(/(S|s)ister/g, "$1ibling");
    text = text.replace(/\b(aunt|uncle)/g, "auncle");
    text = text.replace(/\b(Aunt|Uncle)/g, "Auncle");
    text = text.replace(/\b(N|n)(iece|ephew)/g, "$1ibling");

    // Gendered professional/other titles
    text = text.replace(/\b(B|b)?usiness( )?(wo)?men\b/g, "$1usinesspeople");
    text = text.replace(/\b(B|b)?usiness( )?(wo)?man\b/g, "$1usinessperson");
    text = text.replace(/\b(F|f)?ire( )?(wo)?men\b/g, "$1irefighters");
    text = text.replace(/\b(F|f)?ire( )?(wo)?man\b/g, "$1irefighter");
    text = text.replace(/\b(B|b)?usiness( )?(wo)?man\b/g, "$1usinessperson");
    text = text.replace(/\b(P|p)olice( )?(wo)?man\b/g, "$1olice officer");
    text = text.replace(/\b(P|p)olice( )?(wo)?men\b/g, "$1olice officers");
    text = text.replace(/\b(C|c)hair( )?(wo)?man\b/g, "$1hair");
    text = text.replace(/\b(C|c)leaning lady\b/g, "$1leaner");
    text = text.replace(/\bPost( )?(wo)?man\b/g, "Mail carrier");
    text = text.replace(/\bpost( )?(wo)?man\b/g, "mail carrier");
    text = text.replace(/\bPost( )?(wo)?men\b/g, "Mail carriers");
    text = text.replace(/\bpost( )?(wo)?men\b/g, "mail carriers");
    text = text.replace(/\b(S|s)ales( )?(wo)?man\b/g, "$1alesperson");
    text = text.replace(/\b(S|s)ales( )?(wo)?men\b/g, "$1alespeople");
    text = text.replace(/\bstewardess\b/g, "flight attendant");
    text = text.replace(/\bStewardess\b/g, "Flight attendant");
    text = text.replace(/\bstewardesses\b/g, "flight attendants");
    text = text.replace(/\bStewardesses\b/g, "Flight attendants");
    text = text.replace(/\bwait(er|ress)\b/g, "server");
    text = text.replace(/\bwait(ers|resses)\b/g, "servers");
    text = text.replace(/\bWait(er|ress)\b/g, "Server");
    text = text.replace(/\bWait(ers|resses)\b/g, "Servers");
    text = text.replace(/\b(A|a)ctress\b/g, "$1ctor");
    text = text.replace(/\b(A|a)ctresses\b/g, "$1ctors");
    text = text.replace(/\b(C|c)ongress( )?(wo)?man\b/g, "Congressperson");
    text = text.replace(/\bCamera( )?(wo)?man\b/g, "Camera Operator");
    text = text.replace(/\bcamera( )?(wo)?man\b/g, "camera operator");
    text = text.replace(/\bCamera( )?(wo)?men\b/g, "Camera Operators");
    text = text.replace(/\bcamera( )?(wo)?men\b/g, "camera operators");
    text = text.replace(/\b(A|a)ssembly( )?(wo)?man\b/g, "$1ssemblyperson");
    text = text.replace(
      /\b(C|c)onstruction( )?(wo)?man\b/g,
      "$1onstruction worker"
    );
    text = text.replace(
      /\b(C|c)onstruction( )?(wo)?men\b/g,
      "$1onstruction workers"
    );
    text = text.replace(/\bCouncil( )?(wo)?man\b/g, "Council Member");
    text = text.replace(/\bcouncil( )?(wo)?man\b/g, "council member");
    text = text.replace(/\b(A|a)lumn(a|us)\b/g, "$1lum");
    text = text.replace(/\b(A|a)nchor( )?(Wo|wo)?man\b/g, "$1nchor");
    text = text.replace(/\brepo man\b/g, "repo agent");
    text = text.replace(/\brepo men\b/g, "repo agents");
    text = text.replace(/\b(C|c)ave( )?(wo)?man\b/g, "$1ave dweller");
    text = text.replace(/\b(C|c)ave( )?(wo)?men\b/g, "$1ave dwellers");
    text = text.replace(/\b(F|f)resh( )?men\b/g, "$1irst-years");
    text = text.replace(/\b(F|f)resh( )?man\b/g, "$1irst-year");
    text = text.replace(/\b(H|h)eroine\b/g, "$1ero");
    text = text.replace(/\b(H|h)eroines\b/g, "$1eroes");
    text = text.replace(/\b(H|h)ostesses\b/g, "$1osts");
    text = text.replace(/\b(H|h)ostess\b/g, "$1ost");
    text = text.replace(/\b(H|h)ouse( )?wife\b/g, "$1omemaker");
    text = text.replace(/\b(L|l)umber( )?(J|j)ack\b/g, "$1ogger");
    text = text.replace(/\bMaiden (N|n)ame\b/g, "Family name");
    text = text.replace(/\bmaiden (N|n)ame\b/g, "family name");
    text = text.replace(/\bMarks( )?man\b/g, "Sharpshooter");
    text = text.replace(/\bmarks( )?man\b/g, "sharpshooter");
    text = text.replace(/\bmeter( )?maid\b/g, "parking cop");
    text = text.replace(/\bMeter( )?maid\b/g, "Parking cop");
    text = text.replace(/\b(P|p)aperboy/g, "$1aper deliverer");
    text = text.replace(/\bseamstress/g, "tailor");
    text = text.replace(/\bSeamstress/g, "Tailor");
    text = text.replace(/\b(S|s)orceress/g, "$1orcerer");
    text = text.replace(/\b((G|g)arbage|(T|t)rash)( )?man/g, "$1 collector");
    text = text.replace(/\b((G|g)arbage|(T|t)rash)( )?men/g, "$1 collectors");
    text = text.replace(/\b(W|w)eather( )?(wo)?man/g, "$1eather caster");
    text = text.replace(/\bKing/g, "Monarch");
    text = text.replace(/\bQueen/g, "Monarch");
    text = text.replace(/\b(king|queen)/g, "monarch");
    text = text.replace(/\b(E|e)mpress/g, "$1mperor");
    text = text.replace(/\b(D|d)(uke|uchess)/g, "$1uke");
    text = text.replace(/\b(M|m)onk(s)?\b/g, "$1onastic$2");
    text = text.replace(/\bnun(s)?\b/g, "monastic$1");
    text = text.replace(/\bNun(s)?\b/g, "Monastic$1");
    text = text.replace(/\b(L|l)andlady?/g, "$1andlord");
    text = text.replace(/\b(P|p)riestess?/g, "$1riest");

    // Generalized terms
    text = text.replace(/\bto man\b/g, "to staff");
    text = text.replace(/\bMan( |-)to( |-)man\b/g, "Head$1to$2head");
    text = text.replace(/\bman( |-)to( |-)man\b/g, "head$1to$2head");
    text = text.replace(/\b(M|m)an( )?hole\b/g, "$1aintenance hole");
    text = text.replace(/\bMan( )?power\b/g, "Workforce");
    text = text.replace(/\bman( )?power\b/g, "workforce");
    text = text.replace(/\bMother Nature\b/g, "Nature");
    text = text.replace(/\bmother tongue(s)?\b/g, "native language$1");
    text = text.replace(/\bMother tongue(s)?\b/g, "Native language$1");
    text = text.replace(/\b(O|o)ld (W|w)ive(')?s (T|t)ale/g, "superstition");
    text = text.replace(/\b(S|s)portsmanlike\b/g, "$1porting");
    text = text.replace(/\bbachelorettes/g, "single people");
    text = text.replace(/\bbachelorette/g, "single person");
    text = text.replace(/\bBachelorette/g, "Single person");
    // For bachelor's degree, etc., it's typically capitalized,
    // or at least possessive.
    text = text.replace(/\bbachelor /g, "single person ");

    // Base terms
    text = text.replace(/\ba (wo)?man\b/g, "an individual");
    text = text.replace(/\bA (wo)?man\b/g, "An individual");
    text = text.replace(/\bWoman\b/g, "Individual");
    text = text.replace(/\bMan\b/g, "Individual");
    text = text.replace(/woman\b/g, "person");
    text = text.replace(/\bman\b/g, "person");
    text = text.replace(/\b(wo)?men\b/g, "people");
  }
  return text;
}

// Don't run on editable nodes to avoid confusion
function shouldIgnoreNode(node) {
  return (
    // Editable nodes, nodes w/ editable parents, inputs
    node.isContentEditable ||
    (node.parentNode && node.parentNode.isContentEditable) ||
    node.tagName.toLowerCase() == "input"
  );
}

// Actually walks the page
function docWalker(root) {
  // Go from root, only consider Text nodes
  var walker = document.createTreeWalker(
    root,
    NodeFilter.SHOW_TEXT,
    null,
    true
  );

  var nextNode;
  for (nextNode = root; walker.nextNode != null; nextNode = walker.nextNode()) {
    nextNode.nodeValue = neutralizeNode(nextNode);
  }
}

// Updates on additions or changes to page
function handleMutation(mutationList) {
  for (mutation of mutationList) {
    for (addedNode of mutation.addedNode) {
      if (!shouldIgnoreNode(addedNode)) {
        // Don't walk anything editable (children are editable too)
        continue;
      } else if (addedNode.nodeType === 3) {
        // All text nodes are leaves -- don't need to walk.
        addedNode.nodeValue = neutralizeNode(addedNode);
      } else {
        // All others, walk through children to look for textnodes.
        // Does this need to be the case? Or does it already include?
        docWalker(addedNode);
      }
    }
  }
}

function main(doc) {
  doc.title = neutralizeNode(doc.title);

  docWalker(doc.body);

  var observer = new MutationObserver(handleMutation);
  observer.observe(document.body);
}

// Yeah, I'm a Java developer.
main(document);
