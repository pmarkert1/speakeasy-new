"use client";

import Card from "./CardNav";

type NavType = {

}

export default function Nav(){
    return(
<nav className="w-full md:w-1/2 bg-black fixed h-full md:border-r z-30 overflow-scroll scroll-smooth">
        <div id="nav-cards" className="mt-30">
        <Card href="/" eventTitle="EVENT 1 - The titles are usually a bit longer" imgAlt="Alttext" imgSrc="https://placehold.co/800x1000/FFA07A/000000?text=Announcement+goes+here&font=papyrus"></Card>
        <Card href="/" eventTitle="EVENT 1" imgAlt="Alttext" imgSrc="https://placehold.co/800x1000/FFA07A/000000?text=Announcement+goes+here&font=papyrus"></Card>
        <Card href="/" eventTitle="EVENT 1" imgAlt="Alttext" imgSrc="https://placehold.co/800x1000/FFA07A/000000?text=Announcement+goes+here&font=papyrus"></Card>
        <Card href="/" eventTitle="EVENT 1" imgAlt="Alttext" imgSrc="https://placehold.co/800x1000/FFA07A/000000?text=Announcement+goes+here&font=papyrus"></Card>
        <Card href="/" eventTitle="EVENT 1" imgAlt="Alttext" imgSrc="https://placehold.co/800x1000/FFA07A/000000?text=Announcement+goes+here&font=papyrus"></Card>
        </div>
</nav>
 )
}