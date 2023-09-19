function TopicsPage() {
    return (
       <>
            <h2>Web Development Concepts</h2>
            <nav class="local">
                <a href="#servers">Web Servers</a>
                <a href="#design">Frontend Design</a>
                <a href="#images">Optimizing Images</a>
                <a href="#favicons">Favicons</a>
                <a href="#stylesheets">Cascading Stylesheets</a>
            </nav>

            <article id="servers">
                <h3>Web Servers</h3>
                <p>The <strong>index</strong> is the default name for a home page of a website hosted on an Apache web server.</p>
                <p>The general tab contains a <strong>Remote Address</strong> in the Wed Dev/Inspector Tools, whereas the local computer general tab does not have this. The <strong>Response Headers</strong> and <strong>Request Headers</strong> sections also contain much more name/value pairs in the Web Dev/Inspector Tools. The Web Dev/Inspector tools also contain executor.js and favicon.ico tabs, which do not exist in the local computer general tab.</p>
                <p>Favicon.ico has a status code of 200 because the <strong>http request</strong> succeeded, and the <strong>response body</strong> has the needed information. This is because the <strong>favicon</strong> is provided automatically by the OSU server. Main.css and main.js have 404 <strong>status codes</strong> because they were not found on the server. This is because this web file does not use CSS or JavaScript, only HTML.</p>
                <p>For this web file, the <strong>scheme</strong> is "https://", the <strong>subdomain</strong> is "web.engr.", the <strong>domain</strong> is "oregonstate.edu", and the <strong>resource</strong> is "/~jenninbl/a1-jenninbl/". </p>
            </article>

            <article id="design">
                <h3>Frontend Design</h3>
                <p><strong>Frontend design</strong> is about creating the most appropriate experience for users. This includes concepts such as the <strong>visual design</strong>, <strong>interactive experience</strong>, and <strong>graphical user-interface</strong> of a page. 
                    Frontend designers use various tools such as color, fonts, media, icons, and navigation/GUI to create a visually enticing experience for users, which helps to promote longer and more frequent use of that website.</p>
                <p><strong>The Five "E's" of Usability:</strong></p>
                <dl>
                    <dt><strong>Effective</strong></dt>
                    <dd>Effective at helping users meet their goals.</dd>
                    <dt><strong>Efficient</strong></dt>
                    <dd>Efficient, so users can perform tasks with the least number of steps.</dd>
                    <dt><strong>Easy to navigate</strong></dt>
                    <dd>Easy to navigate, especially for users that have never used it before.</dd>
                    <dt><strong>Error-free</strong></dt>
                    <dd>Error-free, to avoid accessibility and availability issues.</dd>
                    <dt><strong>Enjoyable to use, or engaging</strong></dt>
                    <dd>It fits the unique needs of the intended audience in content and design.</dd>
                </dl>
                <p>The <strong>header</strong> element denotes the banner or masthead for an app/site. The <strong>nav</strong> element connects the 
                    pages of a website by allowing navigation between them. The <strong>main</strong> element indicates the primary block that
                    holds content. The <strong>section</strong> element helps to group content by its theme. The <strong>article</strong> element 
                    is normally a single specific topic and a sub-category inside a section. The <strong>footer</strong> element typically 
                    holds legal information, contact information, and links to critical pages.</p>
                <p><strong>Anchors</strong> link to various content using paths.</p>
                <ol>
                    <li>External content uses an <strong>absolute</strong> path.</li>
                    <li>Internal content uses a <strong>relative</strong> path.</li>
                    <li>Page-to-page content uses a <strong>relative</strong> path.</li>
                </ol> 
            </article>

            <article id="images">
                <h3>Optimizing Images</h3>
                <p>The 6 major specifications of images for the web include a <strong>descriptive file name</strong> to improve Search Engine Optimization, a <strong>small file size</strong> to improve load times, <strong>exact dimensions</strong> to further improve load times, a <strong>correct file format</strong> to properly load on the website, <strong>reduced resolution</strong> to further help load times,
                    and <strong>color mode</strong> to properly display the image.</p>
                <p>A photo's most appropriate file format is <strong>.JPG</strong> because this format is designed to efficiently
                    store high-quality digital photos packed with detail and color. Line art is most appropriately 
                    displayed using the <strong>.GIF</strong> format and occasionally <strong>8-bit .PNG</strong> because 
                    they both allow for transparency.</p>
            </article>
            
            <article id="favicons">
                <h3>Favicons</h3>
                <p>Browsers and devices use <strong>favicons</strong> to identify and/or launch websites and apps. 
                    They typically are seen in the browser tab before the title of the tab on a browser and are seen as 
                    an app icon on mobile devices.</p>
            </article>

            <article id="stylesheets">
                <h3>Cascading Stylesheets</h3>
                <p><strong>Stylesheets</strong> allow multiple benefits to websites and apps. Because it allows you to apply 
                    one rule to multiple parts of an HTML document, it leads to faster loading times. 
                    For this same reason, stylesheets can help to make development of that website faster. 
                    Stylesheets also allow for a better experience for users by creating a visually more appealing 
                    environment than a singular HTML webpage can provide. Because the rules are able to apply 
                    to multiple parts of an HTML document, they also can be changed easier if needed, because you only 
                    have to change the stylesheet. Stylesheets also help for compatibility of the website or app across 
                    multiple devices.</p>
                <p>The 5 ways to incorporate styles are using <strong>externally</strong> linked .CSS files, <strong>embedding</strong> within a style tag, <strong>inlining</strong> with an element, incorporating with JavaScript <strong>template literals</strong> within a JavaScript function, 
                    and incorporating with <strong>regular JavaScript</strong> by manipulating the Document Object Model. These different ways 
                    exist to allow variation in applying styles depending on the need of the developer. Typically, using an 
                    externally linked .CSS file is the standard for manipulating the style of a website, whereas the other 
                    four are used for singular style changes of a single moment on the website.</p>
            </article>
            </>
    );
}
export default TopicsPage;