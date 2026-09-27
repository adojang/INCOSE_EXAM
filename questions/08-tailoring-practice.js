/* Chapter 4 — Tailoring and Application Considerations (13) and Chapter 5 — SE in Practice (5) */

/* ---- Tailoring (3) ---- */
Q({
  id: "P01", d: "tailoring", b: "understand",
  ref: "SEH5 Ch.4 — Tailoring",
  s: "What is the purpose of tailoring SE processes?",
  o: [
    ["To remove as many processes as possible so the project spends its budget on design and build.",
      "Removing essential activities increases risk; tailoring is about fitness, not minimization."],
    ["To adapt processes and their rigor to the project's size, complexity, risk and constraints.",
      "Correct. Tailoring right-sizes SE so the effort is appropriate to the risk and value."],
    ["To let each project define its own processes from scratch, independent of organizational standards.",
      "Tailoring starts from the organization's standard processes; it doesn't reinvent them."],
    ["To show auditors that every document required by the standard has been produced.",
      "Compliance-driven paperwork isn't the goal."],
  ],
  a: 1,
  t: "Tailoring right-sizes SE to the project's risk, complexity and context.",
});

Q({
  id: "P02", d: "tailoring", b: "understand",
  ref: "SEH5 Ch.4 — Tailoring (pitfalls)",
  s: "Which is a recognized tailoring pitfall?",
  o: [
    ["Documenting the tailoring decisions and their rationale in the SEMP.", "That's good practice, not a pitfall."],
    ["Involving key stakeholders when deciding which activities to tailor.", "That's good practice."],
    ["Applying excessive process to a small project, or cutting essential activities.",
      "Correct. Both too much rigor (over-burdening) and too little (e.g., skipping verification planning) cause problems; tailoring must be risk-based and justified."],
    ["Reusing the tailoring of a similar past project after reviewing its fit.", "Sensible reuse after review is fine."],
  ],
  a: 2,
  t: "Pitfalls: too much process (waste) or too little (risk). Tailor by risk, and justify.",
});

Q({
  id: "P03", d: "tailoring", b: "apply",
  ref: "SEH5 Ch.4 — Tailoring (documentation of tailoring)",
  s: "A project decides to combine two formal design reviews into one because the design is a minor modification of a proven product. What should it do?",
  o: [
    ["Record the decision and rationale (e.g., in the SEMP) and obtain approval.",
      "Correct. Tailoring is legitimate when justified, documented and approved, so others understand what was changed and why."],
    ["Skip both reviews entirely, since the product is already proven in service.",
      "That removes a control entirely, which the rationale doesn't justify."],
    ["Hold both reviews anyway, because standard processes may not be tailored.",
      "Tailoring is explicitly encouraged."],
    ["Combine them informally and mention it in the final project report.",
      "Undocumented, unapproved tailoring causes confusion and audit problems."],
  ],
  a: 0,
  t: "Tailoring = justified, documented, approved.",
});

/* ---- MBSE and methodologies (5) ---- */
Q({
  id: "P04", d: "tailoring", b: "remember",
  ref: "SEH5 Ch.4 — SE Methodology/Approaches: Model-Based Systems Engineering",
  s: "Which statement best describes Model-Based Systems Engineering (MBSE)?",
  o: [
    ["Using 3D CAD models to design the mechanical parts of the system and check their fit.",
      "CAD is discipline-specific modeling; MBSE covers system-level SE activities."],
    ["Using modeling software to automate SE so that fewer systems engineers are required.",
      "MBSE is performed by engineers; tools support them."],
    ["Using diagrams in presentations and documents to explain the system to stakeholders.",
      "Unconnected drawings are not models with shared semantics."],
    ["The formalized use of modeling to support requirements, design, analysis and V&V across the life cycle.",
      "Correct. MBSE starts in concept and continues through development and later stages, shifting SE from document-centric to model-centric work."],
  ],
  a: 3,
  t: "MBSE = formalized modeling supporting requirements, design, analysis and V&V across the life cycle.",
});

Q({
  id: "P05", d: "tailoring", b: "understand",
  ref: "SEH5 Ch.4 — SE Methodology/Approaches: Model-Based Systems Engineering (benefits)",
  s: "What is a key benefit of MBSE compared with document-centric SE?",
  o: [
    ["It removes the need for stakeholder reviews, since the model itself is the agreement.",
      "Stakeholders remain essential."],
    ["One integrated model keeps views consistent, so changes propagate and conflicts show.",
      "Correct. Views generated from one authoritative model stay consistent, improving communication, analysis and change impact assessment."],
    ["It guarantees the delivered system will be free of design defects.",
      "No method guarantees that."],
    ["It makes written requirements unnecessary, because behavior is fully modeled.",
      "Requirements are still needed and are often part of the model."],
  ],
  a: 1,
  t: "MBSE's big win: one consistent model → consistent views, easier change impact, better communication.",
});

Q({
  id: "P06", d: "tailoring", b: "understand",
  ref: "SEH5 Ch.4 — Model-Based Systems Engineering (language, method, tool)",
  s: "In MBSE, how should SysML be characterized?",
  o: [
    ["As a modeling language — notation and semantics, but not a method or a tool.",
      "Correct. Successful MBSE needs a language, a method and a tool; SysML is only the language."],
    ["As a complete MBSE methodology that prescribes the modeling process step by step.",
      "SysML doesn't prescribe a process; methods (e.g., OOSEM and others) do."],
    ["As a specific commercial software tool for creating system architecture models.",
      "Many tools implement SysML; the language itself isn't a tool."],
    ["As a programming language from which embedded software is compiled directly.",
      "SysML is for system modeling, not code."],
  ],
  a: 0,
  t: "MBSE = language (e.g., SysML) + method + tool. They are not the same thing.",
});

Q({
  id: "P07", d: "tailoring", b: "understand",
  ref: "SEH5 Ch.4 — SE Methodology/Approaches: Lean Systems Engineering",
  s: "What is the central aim of Lean Systems Engineering?",
  o: [
    ["To reduce the number of engineers assigned to SE activities on the project.", "Headcount reduction is not the aim."],
    ["To produce fewer documents by replacing them with informal communication.", "Unnecessary documents may be waste, but the aim is broader."],
    ["To deliver the most stakeholder value by eliminating waste in SE work.",
      "Correct. Lean SE applies lean principles (value, value stream, flow, pull, perfection) to SE."],
    ["To shorten schedules by overlapping verification with detailed design.", "Concurrency can help but isn't the defining aim."],
  ],
  a: 2,
  t: "Lean SE: maximize value, minimize waste.",
});

Q({
  id: "P08", d: "tailoring", b: "understand",
  ref: "SEH5 Ch.4 — SE Methodology/Approaches: Product Line Engineering",
  s: "What characterizes product line engineering?",
  o: [
    ["Designing each product from scratch for each customer to maximize fit.", "That's the opposite of a product line approach."],
    ["Producing a single product design unchanged for many years.", "A product line has many variants."],
    ["Organizing production lines so each factory builds one product only.", "Unrelated to the SE meaning."],
    ["Engineering a family of products from shared assets with managed variability.",
      "Correct. Reuse across the family cuts cost and time; commonality is planned and variability is explicitly modeled and managed."],
  ],
  a: 3,
  t: "Product line = shared assets + managed variability across a family.",
});

/* ---- System types (4) ---- */
Q({
  id: "P09", d: "tailoring", b: "understand",
  ref: "SEH5 Ch.4 — System Types: Systems of Systems",
  s: "Which characteristics most distinguish a system of systems (SoS) from a large monolithic system?",
  o: [
    ["Operational and managerial independence of its constituent systems",
      "Correct. These are Maier's key discriminators (with geographic distribution, emergent behavior and evolutionary development)."],
    ["A very large number of components and interfaces",
      "Size doesn't make something an SoS."],
    ["Central ownership and management by a single organization",
      "Constituents are often owned and managed independently."],
    ["Use of software to coordinate all of its elements",
      "SoS can include any kind of system; software is not the defining trait."],
  ],
  a: 0,
  t: "SoS = independently operated and managed constituents that together deliver more.",
});

Q({
  id: "P10", d: "tailoring", b: "apply",
  ref: "SEH5 Ch.4 — System Types: Systems of Systems (SoS types)",
  s: "An SoS has recognized objectives, a designated manager and resources, but the constituent systems keep their own ownership, objectives and funding. Which SoS type is this?",
  o: [
    ["Directed", "In a directed SoS, constituents are built and managed to fulfill the SoS purpose and are subordinate to it."],
    ["Acknowledged", "Correct. Changes to constituents are agreed through collaboration between the SoS and the constituent systems."],
    ["Collaborative", "Collaborative SoS have no central management authority; constituents interact voluntarily."],
    ["Virtual", "Virtual SoS lack both central management and an agreed purpose."],
  ],
  a: 1,
  t: "SoS types: directed, acknowledged, collaborative, virtual — ordered by decreasing central authority.",
});

Q({
  id: "P11", d: "tailoring", b: "remember",
  ref: "SEH5 Ch.4 — System Types: Cyber-Physical Systems",
  s: "What is a cyber-physical system?",
  o: [
    ["Any networked IT system, such as an enterprise data center or cloud service.", "A pure IT network lacks the tight coupling with physical processes."],
    ["A system tightly integrating computation, networking and physical processes.",
      "Correct. Examples are autonomous vehicles and smart grids; their behavior depends on both computing and physical parts, making timing, safety and security critical."],
    ["A system whose main purpose is protecting networks from cyber attack.", "Security is a concern, not the definition."],
    ["A mechanical system with sensors but no software or communications.", "That lacks the 'cyber' part."],
  ],
  a: 1,
  t: "Cyber-physical = computation + networking + physical processes in feedback.",
});

Q({
  id: "P12", d: "tailoring", b: "understand",
  ref: "SEH5 Ch.4 — System Types: Service Systems",
  s: "What is distinctive about engineering a service system compared with a product?",
  o: [
    ["Services have no formal requirements, only customer expectations.", "Services have requirements (e.g., service levels)."],
    ["Services are delivered by people alone, without technology.", "Most services rely heavily on technology."],
    ["Value is co-created with the customer, so people and processes are part of the system.",
      "Correct. Service systems include people, processes and technology, and the customer participates in delivering value."],
    ["Services need no verification or validation once they are launched.", "Service performance and fitness for purpose must still be verified and validated."],
  ],
  a: 2,
  t: "Service systems: value co-created with customers; people and processes are part of the system.",
});

Q({
  id: "P13", d: "tailoring", b: "apply",
  ref: "SEH5 Ch.4 — Application of SE to small projects/organizations",
  s: "A five-person startup is developing a small connected device. How should SE be applied?",
  o: [
    ["Not at all, because SE is intended only for large, complex defense and aerospace programs.",
      "SE principles apply to projects of any size; the handbook discusses small organizations and projects."],
    ["By applying every process with full formal documentation, exactly as on a large program.",
      "That's excessive for a small, lower-complexity effort."],
    ["By hiring an SE consultant near the end to produce the documentation investors expect.",
      "SE adds value by guiding decisions throughout, not by after-the-fact documents."],
    ["With lightweight practices — needs, key trade-offs, interfaces, risks, verification — scaled to risk.",
      "Correct. Scaled-down SE still captures the essentials."],
  ],
  a: 3,
  t: "Small projects need SE too — scaled and lightweight.",
});

/* ---- Chapter 5: SE in Practice (5) ---- */
Q({
  id: "C01", d: "practice", b: "remember",
  ref: "SEH5 Ch.5 — SE Competencies (INCOSE SE Competency Framework)",
  s: "Which set lists the competency areas of the INCOSE Systems Engineering Competency Framework?",
  o: [
    ["Core, Professional, Technical, Management, Integrating",
      "Correct. The framework groups competencies into these five areas, spanning technical knowledge through people and integrating skills."],
    ["Mechanical, Electrical, Software, Civil, Chemical",
      "These are engineering disciplines, not SE competency areas."],
    ["Awareness, Supervised, Practitioner, Lead, Expert",
      "These are the framework's proficiency levels, not its competency areas."],
    ["Plan, Do, Check, Act, Improve",
      "That's the PDCA improvement cycle."],
  ],
  a: 0,
  t: "INCOSE SE competency areas: Core, Professional, Technical, Management, Integrating (proficiency levels are separate).",
});

Q({
  id: "C02", d: "practice", b: "apply",
  ref: "SEH5 Ch.5 — SE Ethics (INCOSE Code of Ethics)",
  s: "A systems engineer is pressured to approve a verification report that omits a failed safety test so that the program can meet a milestone. What should they do?",
  o: [
    ["Approve it, since meeting the milestone is a legitimate business need and the test can be rerun later.",
      "Business pressure does not override honesty and public safety."],
    ["Approve it, but record their objection privately in case questions are asked later.",
      "A private note doesn't protect the public or correct the record."],
    ["Refuse to approve it, document the facts, and escalate, putting public safety first.",
      "Correct. The INCOSE Code of Ethics emphasizes honesty, integrity, and protecting the safety, health and welfare of the public."],
    ["Resign quietly from the program so they are not personally associated with the report.",
      "Resigning without raising the issue leaves the hazard unaddressed."],
  ],
  a: 2,
  t: "Ethics: honesty and public safety come before schedule pressure — refuse, document, escalate.",
});

Q({
  id: "C03", d: "practice", b: "understand",
  ref: "SEH5 Ch.5 — Diversity, Equity and Inclusion in SE",
  s: "Why does the handbook consider diversity and inclusion important for systems engineering teams?",
  o: [
    ["Mainly because employment law requires it, rather than for any engineering benefit.",
      "Legal compliance matters, but the handbook highlights engineering benefits."],
    ["Because wider perspectives help reveal stakeholder needs, risks and design blind spots.",
      "Correct. SE depends on understanding many stakeholders and viewpoints; diverse, inclusive teams strengthen that."],
    ["Because a diverse team can stand in for stakeholders, so less stakeholder engagement is needed.",
      "It improves engagement but doesn't replace it."],
    ["It is a cultural topic with no measurable effect on engineering outcomes.",
      "The handbook argues the opposite."],
  ],
  a: 1,
  t: "Diverse, inclusive teams see more perspectives — fewer blind spots in needs, risks and design.",
});

Q({
  id: "C04", d: "practice", b: "understand",
  ref: "SEH5 Ch.5 — SE Competencies (professional/interpersonal skills)",
  s: "Which skill set is considered especially important for effective systems engineers, in addition to technical knowledge?",
  o: [
    ["Deep expertise in exactly one engineering discipline, with limited interest in the others.",
      "SEs need breadth to integrate across disciplines."],
    ["The ability to work independently and make decisions without consulting other teams.",
      "SE is highly collaborative."],
    ["Advanced proficiency in the project's modeling and requirements management tools.",
      "Tool skills are useful but not the key SE differentiator."],
    ["Communication, facilitation, negotiation, critical thinking and leadership.",
      "Correct. These professional competencies are needed to integrate people and disciplines — much of SE is aligning people, resolving conflicts and communicating across boundaries."],
  ],
  a: 3,
  t: "Systems engineers need people skills (communicate, facilitate, negotiate, lead) as much as technical ones.",
});

Q({
  id: "C05", d: "practice", b: "understand",
  ref: "SEH5 Ch.5 — Systems Engineering in Practice (the systems engineer's role)",
  s: "Which description best fits the typical profile of an effective systems engineer?",
  o: [
    ["Broad across disciplines and the life cycle, deep in at least one area ('T-shaped').",
      "Correct. Breadth enables integration and seeing the big picture; depth gives credibility and judgment."],
    ["The leading specialist in every discipline represented on the project.",
      "No one can be; SE relies on specialists."],
    ["The person responsible for writing and maintaining all project documents.",
      "Documentation supports SE but isn't its essence."],
    ["The single authority who makes every design decision on the project.",
      "SE facilitates decisions with stakeholders and specialists."],
  ],
  a: 0,
  t: "The effective SE is T-shaped: broad across the system and life cycle, deep in something.",
});
