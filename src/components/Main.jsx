import React from "react";
import Dashboard from "./parent-container/Dashboard";
import Header from "./main-components/Header";
import Footer from "./main-components/Footer";
import Title from "./main-components/Title";
function Main() {
    return (
        <div className="flex flex-col">
            {/* Header section */}
            <section className="block h-40
            border-gray-500 border-b-2
            fixed top-0 left-0 right-0 bg-white z-50">
                <Header /> 
            </section>

            {/* Main body */}
            <section className="flex flex-col flex-grow
            mt-40 mb-32 z-1">
                <Title>Please name your list :</Title>
                <Dashboard />
            </section>

            {/* Footer section */}
            <section className="block h-32 bg-white
            border-gray-500 border-t-2
            fixed bottom-0 left-0 right-0 z-50">
                <Footer />
            </section>
        </div>
    );
}

export default Main;
