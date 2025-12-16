import React, { useState } from "react";
import "./Resume.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import WorkExperience from "./WorkExperience";

const Resume = () => {
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <section className="resume container section" id="resume">
            <h2 className="section__title">Experience</h2>

            <div className="resume__container">
                <Tabs
                    className="tabs"
                    selectedIndex={tabIndex}
                    onSelect={(index) => setTabIndex(index)}
                    selectedTabClassName={"is-active"}
                    selectedTabPanelClassName={"is-active"}
                >
                    <TabList className="tab__list">
                        {WorkExperience.map((experience, index) => {
                            const { id, company, title } = experience;
                            return (
                                <Tab className="tab" key={`company-${id}`}>
                                    <div className="button">
                                        <div className="tab__content">
                                            <span className="tab__company">{company}</span>
                                            <span className="tab__role">{title}</span>
                                        </div>
                                    </div>
                                </Tab>
                            );
                        })}
                    </TabList>

                    {WorkExperience.map((experience) => {
                        const { id, company, location, yearsActive, title, information } = experience;
                        return (
                            <TabPanel className="tab__panel" key={`panel-${id}`}>
                                <h2 className="tab__panel-title">{title}</h2>
                                <div className="tab__panel-meta">
                                    <p className="tab__panel-company">
                                        <span className="meta-icon">📍</span>
                                        {location}
                                    </p>
                                    <p className="tab__panel-date">
                                        <span className="meta-icon">📅</span>
                                        {yearsActive}
                                    </p>
                                </div>
                                <ul className="tab__panel-list">
                                    {information.map((info, index) => {
                                        if (typeof info === 'object' && info.link) {
                                            return (
                                                <li key={`info-${index}`}>
                                                    {info.text}
                                                    <a 
                                                        href={info.link.url} 
                                                        target="_blank" 
                                                        rel="noopener noreferrer"
                                                        className="tab__panel-link"
                                                    >
                                                        {info.link.text}
                                                    </a>
                                                    {info.suffix && info.suffix}
                                                </li>
                                            );
                                        }
                                        return <li key={`info-${index}`}>{info}</li>;
                                    })}
                                </ul>
                            </TabPanel>
                        );
                    })}
                </Tabs>
            </div>
        </section>
    );
};

export default Resume;
