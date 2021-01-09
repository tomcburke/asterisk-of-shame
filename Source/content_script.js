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
    v = v.replace("Tommy Tuberville","Tommy Tuberville*");
    v = v.replace("Rick Scott","Rick Scott*");
    v = v.replace("Roger Marshall","Roger Marshall*");
    v = v.replace("John Kennedy","John Kennedy*");
    v = v.replace("Cindy Hyde-Smith","Cindy Hyde-Smith*");
    v = v.replace("Josh Hawley","Josh Hawley*");
    v = v.replace("Ted Cruz","Ted Cruz*");
    v = v.replace("Cynthia Lummis","Cynthia Lummis*");
    v = v.replace("Robert B. Aderholt","Robert B. Aderholt*");
    v = v.replace("Robert Aderholt","Robert Aderholt*");
    v = v.replace("Mo Brooks","Mo Brooks*");
    v = v.replace("Jerry Carl","Jerry Carl*");
    v = v.replace("Barry Moore","Barry Moore*");
    v = v.replace("Gary Palmer","Gary Palmer*");
    v = v.replace("Mike Rogers","Mike Rogers*");
    v = v.replace("Andy Biggs","Andy Biggs*");
    v = v.replace("Paul Gosar","Paul Gosar*");
    v = v.replace("Debbie Lesko","Debbie Lesko*");
    v = v.replace("David Schweikert","David Schweikert*");
    v = v.replace("Rick Crawford","Rick Crawford*");
    v = v.replace("Ken Calvert","Ken Calvert*");
    v = v.replace("Mike Garcia","Mike Garcia*");
    v = v.replace("Darrell Issa","Darrell Issa*");
    v = v.replace("Doug LaMalfa","Doug LaMalfa*");
    v = v.replace("Kevin McCarthy","Kevin McCarthy*");
    v = v.replace("Devin Nunes","Devin Nunes*");
    v = v.replace("Jay Obernolte","Jay Obernolte*");
    v = v.replace("Lauren Boebert","Lauren Boebert*");
    v = v.replace("Doug Lamborn","Doug Lamborn*");
    v = v.replace("Kat Cammack","Kat Cammack*");
    v = v.replace("Mario Diaz-Balart","Mario Diaz-Balart*");
    v = v.replace("Byron Donalds","Byron Donalds*");
    v = v.replace("Neal Dunn","Neal Dunn*");
    v = v.replace("Scott Franklin","Scott Franklin*");
    v = v.replace("Matt Gaetz","Matt Gaetz*");
    v = v.replace("Carlos Gimenez","Carlos Gimenez*");
    v = v.replace("Brian Mast","Brian Mast*");
    v = v.replace("Bill Posey","Bill Posey*");
    v = v.replace("John Rutherford","John Rutherford*");
    v = v.replace("Greg Steube","Greg Steube*");
    v = v.replace("Daniel Webster","Daniel Webster*");
    v = v.replace("Rick Allen","Rick Allen*");
    v = v.replace("Earl L. Carter","Earl L. Carter*");
    v = v.replace("Buddy Carter","Buddy Carter*");
    v = v.replace("Andrew Clyde","Andrew Clyde*");
    v = v.replace("Marjorie Taylor Greene","Marjorie Taylor Greene*");
    v = v.replace("Jody Hice","Jody Hice*");
    v = v.replace("Barry Loudermilk","Barry Loudermilk*");
    v = v.replace("Russ Fulcher","Russ Fulcher*");
    v = v.replace("Mike Bost","Mike Bost*");
    v = v.replace("Mary Miller","Mary Miller*");
    v = v.replace("Jim Baird","Jim Baird*");
    v = v.replace("Jim Banks","Jim Banks*");
    v = v.replace("Greg Pence","Greg Pence*");
    v = v.replace("Jackie Walorski","Jackie Walorski*");
    v = v.replace("Ron Estes","Ron Estes*");
    v = v.replace("Jacob LaTurner","Jacob LaTurner*");
    v = v.replace("Tracey Mann","Tracey Mann*");
    v = v.replace("Harold Rogers","Harold Rogers*");
    v = v.replace("Garret Graves","Garret Graves*");
    v = v.replace("Clay Higgins","Clay Higgins*");
    v = v.replace("Mike Johnson","Mike Johnson*");
    v = v.replace("Steve Scalise","Steve Scalise*");
    v = v.replace("Andy Harris","Andy Harris*");
    v = v.replace("Jack Bergman","Jack Bergman*");
    v = v.replace("Lisa McClain","Lisa McClain*");
    v = v.replace("Tim Walberg","Tim Walberg*");
    v = v.replace("Michelle Fischbach","Michelle Fischbach*");
    v = v.replace("Jim Hagedorn","Jim Hagedorn*");
    v = v.replace("Michael Guest","Michael Guest*");
    v = v.replace("Trent Kelly","Trent Kelly*");
    v = v.replace("Steven Palazzo","Steven Palazzo*");
    v = v.replace("Sam Graves","Sam Graves*");
    v = v.replace("Vicky Hartzler","Vicky Hartzler*");
    v = v.replace("Billy Long","Billy Long*");
    v = v.replace("Blaine Luetkemeyer","Blaine Luetkemeyer*");
    v = v.replace("Jason Smith","Jason Smith*");
    v = v.replace("Matt Rosendale","Matt Rosendale*");
    v = v.replace("Dan Bishop","Dan Bishop*");
    v = v.replace("Ted Budd","Ted Budd*");
    v = v.replace("Madison Cawthorn","Madison Cawthorn*");
    v = v.replace("Virginia Foxx","Virginia Foxx*");
    v = v.replace("Richard Hudson","Richard Hudson*");
    v = v.replace("Gregory F. Murphy","Gregory F. Murphy*");
    v = v.replace("Gregory Murphy","Gregory Murphy*");
    v = v.replace("David Rouzer","David Rouzer*");
    v = v.replace("Jeff Van Drew","Jeff Van Drew*");
    v = v.replace("Yvette Herrell","Yvette Herrell*");
    v = v.replace("Chris Jacobs","Chris Jacobs*");
    v = v.replace("Nicole Malliotakis","Nicole Malliotakis*");
    v = v.replace("Elise M. Stefanik","Elise M. Stefanik*");
    v = v.replace("Elise Stefanik","Elise Stefanik*");
    v = v.replace("Lee Zeldin","Lee Zeldin*");
    v = v.replace("Adrian Smith","Adrian Smith*");
    v = v.replace("Steve Chabot","Steve Chabot*");
    v = v.replace("Warren Davidson","Warren Davidson*");
    v = v.replace("Bob Gibbs","Bob Gibbs*");
    v = v.replace("Bill Johnson","Bill Johnson*");
    v = v.replace("Jim Jordan","Jim Jordan*");
    v = v.replace("Stephanie Bice","Stephanie Bice*");
    v = v.replace("Tom Cole","Tom Cole*");
    v = v.replace("Kevin Hern","Kevin Hern*");
    v = v.replace("Frank Lucas","Frank Lucas*");
    v = v.replace("Markwayne Mullin","Markwayne Mullin*");
    v = v.replace("Cliff Bentz","Cliff Bentz*");
    v = v.replace("John Joyce","John Joyce*");
    v = v.replace("Fred Keller","Fred Keller*");
    v = v.replace("Mike Kelly","Mike Kelly*");
    v = v.replace("Daniel Meuser","Daniel Meuser*");
    v = v.replace("Scott Perry","Scott Perry*");
    v = v.replace("Guy Reschenthaler","Guy Reschenthaler*");
    v = v.replace("Lloyd Smucker","Lloyd Smucker*");
    v = v.replace("Glenn Thompson","Glenn Thompson*");
    v = v.replace("Jeff Duncan","Jeff Duncan*");
    v = v.replace("Ralph Norman","Ralph Norman*");
    v = v.replace("Tom Rice","Tom Rice*");
    v = v.replace("William Timmons","William Timmons*");
    v = v.replace("Joe Wilson","Joe Wilson*");
    v = v.replace("Tim Burchett","Tim Burchett*");
    v = v.replace("Scott DesJarlais","Scott DesJarlais*");
    v = v.replace("Chuck Fleischmann","Chuck Fleischmann*");
    v = v.replace("Mark E. Green","Mark E. Green*");
    v = v.replace("Mark Green","Mark Green*");
    v = v.replace("Diana Harshbarger","Diana Harshbarger*");
    v = v.replace("David Kustoff","David Kustoff*");
    v = v.replace("John Rose","John Rose*");
    v = v.replace("Jodey Arrington","Jodey Arrington*");
    v = v.replace("Brian Babin","Brian Babin*");
    v = v.replace("Michael C. Burgess","Michael C. Burgess*");
    v = v.replace("Michael Burgess","Michael Burgess*");
    v = v.replace("John R. Carter","John R. Carter*");
    v = v.replace("John Carter","John Carter*");
    v = v.replace("Michael Cloud","Michael Cloud*");
    v = v.replace("Pat Fallon","Pat Fallon*");
    v = v.replace("Louie Gohmert","Louie Gohmert*");
    v = v.replace("Lance Gooden","Lance Gooden*");
    v = v.replace("Ronny Jackson","Ronny Jackson*");
    v = v.replace("Troy Nehls","Troy Nehls*");
    v = v.replace("August Pfluger","August Pfluger*");
    v = v.replace("Pete Sessions","Pete Sessions*");
    v = v.replace("Beth Van Duyne","Beth Van Duyne*");
    v = v.replace("Randy Weber","Randy Weber*");
    v = v.replace("Roger Williams","Roger Williams*");
    v = v.replace("Ron Wright","Ron Wright*");
    v = v.replace("Burgess Owens","Burgess Owens*");
    v = v.replace("Chris Stewart","Chris Stewart*");
    v = v.replace("Ben Cline","Ben Cline*");
    v = v.replace("Bob Good","Bob Good*");
    v = v.replace("Morgan Griffith","Morgan Griffith*");
    v = v.replace("Robert J. Wittman","Robert J. Wittman*");
    v = v.replace("Carol Miller","Carol Miller*");
    v = v.replace("Alexander X. Mooney","Alexander X. Mooney*");
    v = v.replace("Alexander Mooney","Alexander Mooney*");
    v = v.replace("Scott Fitzgerald","Scott Fitzgerald*");
    v = v.replace("Tom Tiffany","Tom Tiffany*");

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
