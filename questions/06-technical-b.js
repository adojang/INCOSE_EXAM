/* Chapter 2 — Technical Processes, part B: Implementation → Disposal (30) */

/* ---- Implementation (3) ---- */
Q({
  id: "T31", d: "technical", b: "remember",
  ref: "SEH5 Ch.2 — Technical Processes: Implementation",
  s: "What is the purpose of the Implementation process?",
  o: [
    ["To realize a specified system element.", "Correct. Implementation turns design into a real element by fabrication, coding, or acquisition/reuse."],
    ["To put the whole system into service at the customer's site.", "That describes Transition (and then Operation), which happen after the system is integrated, verified and delivered."],
    ["To combine all elements into the complete system and check interfaces.", "That is Integration, which follows Implementation of the individual elements."],
    ["To plan how the project's engineering work will be carried out.", "That is Project Planning, a technical management process."],
  ],
  a: 0,
  t: "Implementation = make, code, or buy the element to its design.",
});

Q({
  id: "T32", d: "technical", b: "understand",
  ref: "SEH5 Ch.2 — Technical Processes: Implementation (feedback of constraints)",
  s: "During implementation, a manufacturer finds that a specified tolerance cannot be achieved with available processes. What should happen?",
  o: [
    ["Relax the tolerance on the shop floor without formal notice, since the part will probably still work.",
      "Undocumented deviations break configuration control and may cause interface or safety failures."],
    ["Stop the project until a manufacturing technology capable of the tolerance becomes available.",
      "Disproportionate; the issue can usually be resolved through analysis and change."],
    ["Feed the constraint back to design and requirements, assess impact, and resolve via change control.",
      "Correct. Implementation constraints are legitimate inputs back into design and requirements; processes iterate."],
    ["Build the parts to the best achievable tolerance and let verification decide if they are acceptable.",
      "Knowingly building nonconforming parts wastes cost and time and bypasses the design decision."],
  ],
  a: 2,
  t: "Implementation constraints feed back into design/requirements — SE processes iterate.",
});

Q({
  id: "T33", d: "technical", b: "understand",
  ref: "SEH5 Ch.2 — Technical Processes: Implementation",
  s: "Which is an appropriate output of Implementation for a system element?",
  o: [
    ["An approved stakeholder requirements set, agreed with the users and baselined.", "That comes from Stakeholder Needs and Requirements Definition."],
    ["A recommendation to terminate the project at the next decision gate.", "That's a gate/portfolio decision."],
    ["A validated system operating with real users in its intended environment.", "Validation of the whole system comes much later."],
    ["The realized element, with evidence it conforms to its design, and documentation.",
      "Correct. Implementation delivers the element plus the records (e.g., inspection or unit test results) needed for integration and verification."],
  ],
  a: 3,
  t: "Implementation outputs the realized element plus evidence and documentation.",
});

/* ---- Integration (5) ---- */
Q({
  id: "T34", d: "technical", b: "remember",
  ref: "SEH5 Ch.2 — Technical Processes: Integration",
  s: "What is the purpose of the Integration process?",
  o: [
    ["To bring the project's separate teams together into one integrated organization.", "Team integration is organizational, not the technical process."],
    ["To synthesize system elements into a realized system that satisfies requirements.",
      "Correct. Integration assembles elements progressively into a system consistent with the requirements, architecture and design, checking that interfaces and interactions work."],
    ["To provide evidence that the system meets stakeholder needs in its intended use.", "That's Validation."],
    ["To merge the needs of different stakeholder groups into one agreed requirement set.", "Merging needs happens in SNRD."],
  ],
  a: 1,
  t: "Integration = assemble elements into the system, with focus on interfaces.",
});

Q({
  id: "T35", d: "technical", b: "understand",
  ref: "SEH5 Ch.2 — Technical Processes: Integration (strategy)",
  s: "What is the main risk of a 'big bang' integration strategy (integrating all elements at once)?",
  o: [
    ["It requires many more test fixtures and simulators than incremental strategies.",
      "It typically needs fewer intermediate fixtures; that's its apparent appeal."],
    ["It is prohibited by ISO/IEC/IEEE 15288 for systems with more than a few elements.",
      "The standard doesn't forbid it."],
    ["Faults are hard to isolate to an element or interface, and are found late.",
      "Correct. Incremental strategies (bottom-up, top-down, by capability) localize faults and find issues earlier."],
    ["It always takes longer to plan than bottom-up or top-down integration.",
      "It may seem faster to plan; debugging is what often makes it slower."],
  ],
  a: 2,
  t: "Big bang = hard fault isolation and late discovery. Integrate incrementally when you can.",
});

Q({
  id: "T36", d: "technical", b: "understand",
  ref: "SEH5 Ch.2 — Technical Processes: Integration (enabling systems)",
  s: "Why might an integration team need simulators, stubs or test harnesses?",
  o: [
    ["To stand in for elements that are unavailable, so integration can proceed.",
      "Correct. These integration enabling systems allow progressive integration and fault isolation when real elements are missing or impractical to use."],
    ["To be delivered to the customer as permanent parts of the operational system.",
      "They are temporary enablers, not deliverables."],
    ["To reduce the number of system requirements that need to be verified.",
      "They don't change the requirements."],
    ["To replace the need for interface definitions between the elements.",
      "They depend on interface definitions; they don't replace them."],
  ],
  a: 0,
  t: "Stubs, simulators, harnesses = integration enabling systems.",
});

Q({
  id: "T37", d: "technical", b: "understand",
  ref: "SEH5 Ch.2 — Technical Processes: Integration and Verification (relationship)",
  s: "How do integration and verification relate on the right side of the Vee?",
  o: [
    ["Verification is done only once, after the whole system has been fully integrated.",
      "Verification is done at each level as elements and assemblies are integrated."],
    ["They are independent activities, planned and performed by unrelated teams.",
      "They are closely coupled on the right side of the Vee."],
    ["Successful integration of elements is itself the verification of their requirements.",
      "Assembling elements doesn't prove requirements are met."],
    ["Elements are verified as they are progressively integrated, level by level.",
      "Correct. Integrate a little, verify a little, working up the hierarchy."],
  ],
  a: 3,
  t: "Integrate and verify progressively, level by level up the Vee.",
});

Q({
  id: "T38", d: "technical", b: "apply",
  ref: "SEH5 Ch.2 — Technical Processes: Integration (interface checks)",
  s: "Two subsystems pass their own tests but fail to exchange data correctly when connected. Where should the team look first?",
  o: [
    ["At the stakeholder needs, since the requirements for data exchange may be wrong.",
      "Needs may be fine; the symptom points to the interaction between elements."],
    ["At the interface definitions and how each side implemented them.",
      "Correct. Interface mismatches (data formats, timing, protocols) are a classic integration problem, which is why interface management matters."],
    ["At each subsystem's unit tests, which must have been performed incorrectly.",
      "Both subsystems met their own requirements; the problem shows up only in combination."],
    ["At the integration schedule, since the subsystems were connected too early.",
      "Timing of integration doesn't cause the data mismatch."],
  ],
  a: 1,
  t: "Elements work alone but not together → check the interface definitions and implementations.",
});

/* ---- Verification (8) ---- */
Q({
  id: "T39", d: "technical", b: "remember",
  ref: "SEH5 Ch.2 — Technical Processes: Verification",
  s: "What is the purpose of the Verification process?",
  o: [
    ["To provide objective evidence that a system or element fulfills its specified requirements and characteristics.",
      "Correct. Verification answers 'did we build it right?' against the specified requirements."],
    ["To provide objective evidence that the system meets stakeholders' intended use in its operational environment.",
      "That's Validation."],
    ["To provide objective evidence that the project's processes comply with the organization's quality requirements.",
      "That's Quality Assurance."],
    ["To provide objective data about project and technical performance to support management decisions.",
      "That's Measurement."],
  ],
  a: 0,
  t: "Verification = built right? (against specified requirements).",
});

Q({
  id: "T40", d: "technical", b: "remember",
  ref: "SEH5 Ch.2 — Technical Processes: Verification (methods)",
  s: "Which list gives the four classic verification methods?",
  o: [
    ["Planning, execution, reporting, closure", "These are phases of an activity, not verification methods."],
    ["Interview, survey, workshop, observation", "These are elicitation techniques."],
    ["Inspection, analysis, demonstration, test", "Correct. Additional approaches such as analogy/similarity and sampling are also mentioned, but these four are the classic set."],
    ["Unit, integration, system, acceptance", "These are verification levels, not methods."],
  ],
  a: 2,
  t: "Verification methods: Inspection, Analysis, Demonstration, Test (IADT).",
});

Q({
  id: "T41", d: "technical", b: "apply",
  ref: "SEH5 Ch.2 — Technical Processes: Verification (methods)",
  s: "A requirement states that the product label shall include the manufacturer's name. Which verification method is most appropriate?",
  o: [
    ["Test", "Test requires controlled stimuli and measurement; unnecessary for checking a visible label."],
    ["Inspection", "Correct. Inspection examines the item visually or with simple measurement against documentation — ideal for physical features and markings."],
    ["Analysis", "Analysis uses models or calculations; unnecessary here."],
    ["Demonstration", "Demonstration shows functional operation; a label has no operation to show."],
  ],
  a: 1,
  t: "Visible feature or marking → Inspection.",
});

Q({
  id: "T42", d: "technical", b: "apply",
  ref: "SEH5 Ch.2 — Technical Processes: Verification (methods)",
  s: "A requirement states that a structure shall withstand a 1-in-10,000-year earthquake. It is impractical to reproduce such an event. Which method is most suitable?",
  o: [
    ["Inspection of the as-built structure against its construction drawings",
      "Inspection confirms it was built as drawn, but cannot show its response to an earthquake."],
    ["Demonstration of the structure's behavior under normal operating loads",
      "Normal loads say little about a 1-in-10,000-year event."],
    ["Analysis using validated models, supported by component or scale tests",
      "Correct. When a condition cannot be practically produced, analysis using validated models (plus partial tests) is used."],
    ["Test of the complete structure under a full-scale simulated earthquake",
      "Impractical and destructive at full scale; that's the point of the scenario."],
  ],
  a: 2,
  t: "Can't reproduce the condition? Use analysis with validated models (plus partial tests).",
});

Q({
  id: "T43", d: "technical", b: "understand",
  ref: "SEH5 Ch.2 — Technical Processes: Verification (demonstration vs test)",
  s: "What distinguishes demonstration from test as a verification method?",
  o: [
    ["Demonstration observes operation qualitatively; test measures under controlled conditions.",
      "Correct. Demonstration = it works as expected when operated (little or no instrumentation); test = quantitative data collected under controlled conditions."],
    ["Demonstration applies to software elements; test applies to hardware elements.",
      "Both methods apply to any kind of element."],
    ["Demonstration is performed by the customer; test is performed by the supplier.",
      "Anyone can perform either; the difference is in the method."],
    ["Demonstration is used for development; test is used only for production units.",
      "Both can be used at any level and stage."],
  ],
  a: 0,
  t: "Demonstration = observe it working. Test = measure it under controlled conditions.",
});

Q({
  id: "T44", d: "technical", b: "understand",
  ref: "SEH5 Ch.2 — Technical Processes: Verification (planning)",
  s: "When should the verification approach for a requirement be defined?",
  o: [
    ["After the system is built, so that the verification can reflect the actual design.",
      "Too late; unverifiable requirements and missing test facilities would be discovered at the worst time."],
    ["Only for safety-critical requirements, where regulators demand a verification plan.",
      "All requirements need a verification approach."],
    ["By the test team alone, after the requirements are baselined, to keep independence.",
      "Collaboration is needed; the requirement author must consider verifiability as they write."],
    ["When the requirement is written, so it is verifiable and resources can be planned.",
      "Correct. Defining the verification method with the requirement exposes ambiguity and lets enabling systems be planned early."],
  ],
  a: 3,
  t: "Define 'how will we verify it?' when the requirement is written.",
});

Q({
  id: "T45", d: "technical", b: "understand",
  ref: "SEH5 Ch.2 — Technical Processes: Verification (scope)",
  s: "Verification applies to which of the following?",
  o: [
    ["Only the final integrated system, just before it is delivered.", "Verification applies at every level and to many artifacts."],
    ["Elements and the system at every level, plus work products like requirements.",
      "Correct. Verification can be applied to any engineering artifact against its specifications or criteria."],
    ["Only software code, since hardware is checked through inspection.", "Hardware and all other artifacts are verified too (inspection is itself a verification method)."],
    ["Only purchased components, whose suppliers' data must be confirmed.", "Developed components need verification too."],
  ],
  a: 1,
  t: "Verify at every level — elements, system, and work products.",
});

Q({
  id: "T46", d: "technical", b: "understand",
  ref: "SEH5 Ch.2 — Technical Processes: Verification (nonconformance)",
  s: "A verification activity shows a system element does not meet a requirement. What is the appropriate response?",
  o: [
    ["Delete or relax the requirement so the element passes, and note it in the report.",
      "Changing a requirement to pass is not legitimate unless properly justified through change control with stakeholders."],
    ["Accept the element if it generally works, since one failed requirement is minor.",
      "Ignoring nonconformances undermines the evidence of compliance."],
    ["Record it, analyze the cause, resolve it (fix or approved waiver), and re-verify.",
      "Correct. Nonconformances are managed with traceable decisions and re-verification."],
    ["Record it in the lessons-learned log for future projects and continue integration.",
      "Lessons learned are useful, but the nonconformance must be resolved."],
  ],
  a: 2,
  t: "Failed verification → record, analyze, resolve (fix or approved waiver), re-verify.",
});

/* ---- Transition (3) ---- */
Q({
  id: "T47", d: "technical", b: "remember",
  ref: "SEH5 Ch.2 — Technical Processes: Transition",
  s: "What is the purpose of the Transition process?",
  o: [
    ["To move the project from one life cycle stage to the next after a decision gate.", "Stage progression is governed by decision gates."],
    ["To establish a capability for the system to provide its services in the operational environment.",
      "Correct. Transition includes preparing the site, delivery, installation, training, and checking the installed system works in place."],
    ["To move responsibility for a risk's consequences to a subcontractor or insurer.", "That's the transfer risk treatment."],
    ["To end the existence of the old system and handle its retired elements.", "That's Disposal (though it may be coordinated with transition)."],
  ],
  a: 1,
  t: "Transition = get the system installed and ready to operate where it will be used.",
});

Q({
  id: "T48", d: "technical", b: "apply",
  ref: "SEH5 Ch.2 — Technical Processes: Transition",
  s: "A supplier installs a new baggage-handling system at an airport, trains the operators and maintainers, and confirms it functions correctly on site. Which process is this?",
  o: [
    ["Transition", "Correct. Installation, training and on-site checks to establish operational capability are Transition activities."],
    ["Operation", "Operation starts once the system is in service."],
    ["Implementation", "Implementation realizes individual elements, before integration."],
    ["Supply", "Supply governs the agreement; the technical work of moving into the operational environment is Transition."],
  ],
  a: 0,
  t: "Install + train + on-site check → Transition.",
});

Q({
  id: "T49", d: "technical", b: "understand",
  ref: "SEH5 Ch.2 — Technical Processes: Transition",
  s: "Why should transition be planned early in the life cycle?",
  o: [
    ["Because transition is always the single most expensive activity in the life cycle.",
      "Not necessarily; the reason is about needs and constraints."],
    ["Because the Transition process must be completed before the Development stage starts.",
      "Transition occurs after the system is ready, not before development."],
    ["Because most systems can skip transition if it is not planned in the Concept stage.",
      "Every fielded system needs to get into operation somehow."],
    ["Because site, installation, training and cut-over needs drive requirements and schedule.",
      "Correct. Transition needs are part of the life cycle concepts and must be captured early."],
  ],
  a: 3,
  t: "Transition drives requirements (site, training, cut-over) — plan it early.",
});

/* ---- Validation (5) ---- */
Q({
  id: "T50", d: "technical", b: "remember",
  ref: "SEH5 Ch.2 — Technical Processes: Validation",
  s: "What is the purpose of the Validation process?",
  o: [
    ["To provide objective evidence that a system element meets its specified design requirements.",
      "That's Verification."],
    ["To confirm, by audit, that the configuration documentation matches the as-built product.",
      "That is a physical configuration audit."],
    ["To provide objective evidence that the system, in use, fulfils its intended use and stakeholder needs.",
      "Correct. Validation answers 'did we build the right system?' — business or mission objectives met, in the intended operational environment."],
    ["To provide assurance that project processes follow the organization's quality management system.",
      "That's Quality Assurance."],
  ],
  a: 2,
  t: "Validation = the right system? (intended use, intended environment, stakeholder needs).",
});

Q({
  id: "T51", d: "technical", b: "understand",
  ref: "SEH5 Ch.2 — Technical Processes: Verification vs Validation",
  s: "A system passes every system requirement verification, but users find it cannot perform their real mission. What does this reveal?",
  o: [
    ["The verification activities must have been performed incorrectly or with faulty equipment.",
      "Not necessarily. Verification can be done correctly against requirements that were wrong or incomplete."],
    ["The system fails validation: the requirements did not fully capture the real needs.",
      "Correct. This is why both verification and validation are needed, and why needs and requirements should be validated early."],
    ["The users are misusing the system and need more training on the verified functions.",
      "Users' needs define success; the system exists to meet them."],
    ["This cannot happen, because a verified system is by definition also validated.",
      "It happens often, which is the whole point of validation."],
  ],
  a: 1,
  t: "Verified ≠ validated. Right to spec can still be the wrong system.",
});

Q({
  id: "T52", d: "technical", b: "understand",
  ref: "SEH5 Ch.2 — Technical Processes: Validation (throughout the life cycle)",
  s: "When can validation activities take place?",
  o: [
    ["Throughout the life cycle, on needs, requirements, models and prototypes as well as the final system.",
      "Correct. Early validation (e.g., with prototypes or models) catches misunderstandings when they are cheap to fix."],
    ["Only after the system has been delivered and has been in operation for some time.",
      "Waiting that long makes errors very expensive."],
    ["Only during the Concept stage, when stakeholder needs are first being agreed.",
      "Final system validation happens later too."],
    ["Only once system verification is complete, since validation depends on its results.",
      "Validation of needs, requirements and prototypes happens long before system verification."],
  ],
  a: 0,
  t: "Validate early and often — needs, requirements, models, prototypes, and the final system.",
});

Q({
  id: "T53", d: "technical", b: "apply",
  ref: "SEH5 Ch.2 — Technical Processes: Validation",
  s: "Which activity is the best example of validation?",
  o: [
    ["Measuring a circuit board's supply voltage in the lab against its specified tolerance.",
      "That's verification against a specified requirement."],
    ["Auditing whether the design team followed the organization's design review procedure.",
      "That's quality assurance."],
    ["Inspecting engineering drawings to confirm they follow the drawing standard.",
      "That's a document inspection, a kind of verification."],
    ["Nurses using a new infusion pump on a realistic ward to confirm they can treat patients safely.",
      "Correct. Real users, realistic environment, intended use — that's validation."],
  ],
  a: 3,
  t: "Real users + realistic environment + intended use = validation.",
});

Q({
  id: "T54", d: "technical", b: "understand",
  ref: "SEH5 Ch.2 — Technical Processes: Validation (who participates)",
  s: "Who should be involved in validation of the system?",
  o: [
    ["Only the development engineers, since they understand the design best.",
      "Developers alone may share the same misunderstandings baked into the design."],
    ["Only independent external auditors, to guarantee objectivity.",
      "Auditors may help but the users and stakeholders are key."],
    ["Stakeholders, especially representative users, in a representative environment.",
      "Correct. Validation evidence is most credible when real stakeholders exercise the system as intended."],
    ["Only the project manager, who signs the validation certificate.",
      "Validation isn't a management sign-off exercise."],
  ],
  a: 2,
  t: "Validation needs real stakeholders in a representative environment.",
});

/* ---- Operation (2) ---- */
Q({
  id: "T55", d: "technical", b: "remember",
  ref: "SEH5 Ch.2 — Technical Processes: Operation",
  s: "What is the purpose of the Operation process?",
  o: [
    ["To repair the system after failures and restore it to service.", "Repair after failure is corrective maintenance — the Maintenance process."],
    ["To run the organization's day-to-day project management activities.", "Project management isn't the Operation process."],
    ["To use the system to deliver its services.", "Correct. It includes staffing operators, running the system, monitoring performance and handling anomalies and customer support."],
    ["To install the system and train its operators on site.", "Installation and initial training are Transition."],
  ],
  a: 2,
  t: "Operation = use the system to deliver services, and monitor how it's doing.",
});

Q({
  id: "T56", d: "technical", b: "understand",
  ref: "SEH5 Ch.2 — Technical Processes: Operation (feedback)",
  s: "Why should performance data be collected during operation?",
  o: [
    ["To confirm needs are still met, detect degradation, and inform maintenance and future systems.",
      "Correct. Operational data informs maintenance, modifications and lessons learned."],
    ["To calculate operator bonuses based on the number of transactions handled per shift.",
      "Not an SE reason."],
    ["Because operation is the only life cycle stage in which measurable data exists.",
      "Data exists in all stages."],
    ["To replace scheduled maintenance, since data shows when parts will fail.",
      "Data can support condition-based maintenance, but it doesn't replace maintenance."],
  ],
  a: 0,
  t: "Operational data closes the loop: maintenance, upgrades, lessons learned.",
});

/* ---- Maintenance (2) ---- */
Q({
  id: "T57", d: "technical", b: "remember",
  ref: "SEH5 Ch.2 — Technical Processes: Maintenance",
  s: "What is the purpose of the Maintenance process?",
  o: [
    ["To keep the project's documentation current throughout development.", "That's information/configuration management."],
    ["To sustain the capability of the system to provide a service.",
      "Correct. It includes corrective, preventive/adaptive/perfective maintenance, logistics support (spares, tools) and failure analysis."],
    ["To maintain the business relationship with the customer after delivery.", "That's account management, not the technical process."],
    ["To provide evidence that the system fulfils its specified requirements.", "That's Verification."],
  ],
  a: 1,
  t: "Maintenance sustains service capability (repair, prevent, adapt, improve, logistics).",
});

Q({
  id: "T58", d: "technical", b: "apply",
  ref: "SEH5 Ch.2 — Technical Processes: Maintenance (types)",
  s: "Replacing a pump's seals every 2,000 operating hours, before they fail, is an example of:",
  o: [
    ["Corrective maintenance", "Corrective maintenance fixes a failure after it happens."],
    ["Perfective maintenance", "Perfective maintenance improves performance or other attributes; this simply prevents failure."],
    ["Preventive maintenance", "Correct. Scheduled actions to prevent failure are preventive maintenance."],
    ["Adaptive maintenance", "Adaptive maintenance adjusts the system to a changed environment."],
  ],
  a: 2,
  t: "Before failure (scheduled) = preventive; after failure = corrective.",
});

/* ---- Disposal (2) ---- */
Q({
  id: "T59", d: "technical", b: "remember",
  ref: "SEH5 Ch.2 — Technical Processes: Disposal",
  s: "What is the purpose of the Disposal process?",
  o: [
    ["To sell surplus project equipment and recover part of the development budget.", "That may occur, but isn't the purpose."],
    ["To remove unnecessary requirements and features before the design is baselined.", "That's requirements management, not Disposal."],
    ["To scrap failed prototypes and test articles at the end of development.", "Too narrow; disposal is a planned life cycle process."],
    ["To end the system's use and properly handle its retired elements and critical disposal needs.",
      "Correct. It covers deactivation, removal, environmental and security concerns (e.g., hazardous materials, data sanitization)."],
  ],
  a: 3,
  t: "Disposal: end use responsibly — environment, safety, security, regulations.",
});

Q({
  id: "T60", d: "technical", b: "apply",
  ref: "SEH5 Ch.2 — Technical Processes: Disposal",
  s: "A bank retiring its old servers must ensure customer data cannot be recovered and that batteries are recycled according to regulations. Which process governs these activities?",
  o: [
    ["Disposal", "Correct. Secure data destruction and environmentally compliant handling of retired elements are Disposal concerns."],
    ["Maintenance", "Maintenance sustains the system in service; these servers are leaving service."],
    ["Transition", "Transition establishes a new system's operation; retiring the old one is Disposal."],
    ["Information Management", "Information Management defines policies for data disposal, but carrying out retirement of the elements is Disposal."],
  ],
  a: 0,
  t: "Data sanitization + hazardous material handling at end of life → Disposal.",
});
