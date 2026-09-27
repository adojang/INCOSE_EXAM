/* Chapter 1 — Systems Engineering Introduction & Systems Concepts (18) */

Q({
  id: "I01", d: "intro", b: "remember",
  ref: "SEH5 Ch.1 — What Is Systems Engineering? (INCOSE definition of SE)",
  s: "Which statement best matches INCOSE's definition of systems engineering?",
  o: [
    ["A transdisciplinary and integrative approach to enable the successful realization, use, and retirement of engineered systems, using systems principles and concepts, and scientific, technological, and management methods.",
      "This is INCOSE's definition. Note the key words: transdisciplinary, integrative, and the whole life (realization, use AND retirement)."],
    ["A management discipline that plans, budgets, schedules and controls the engineering work of a project so that the engineered system is delivered on time, within cost, and to the agreed scope.",
      "That describes project management. SE and project management overlap and cooperate, but SE's focus is the technical whole of the system across its life, not primarily cost and schedule control."],
    ["An engineering discipline that designs the hardware and software components of a product in detail, using scientific and technological methods to ensure that each component meets its own specification.",
      "That describes the specialist design disciplines. SE integrates those disciplines and focuses on the whole system; it does not replace hardware or software design engineering."],
    ["A defined sequence of documents, reviews and approvals that must be completed in order, from requirements through design and test, before an engineered system can enter production.",
      "SE is not defined by documents or a fixed sequence. The handbook stresses that processes are tailored and can be applied iteratively, concurrently, or recursively."],
  ],
  a: 0,
  t: "SE = transdisciplinary + integrative + whole life cycle (realize, use, retire), using systems principles plus science, technology and management methods.",
});

Q({
  id: "I02", d: "intro", b: "remember",
  ref: "SEH5 Ch.1 — Systems Concepts (definition of a system)",
  s: "In the handbook's view, what distinguishes a system from a simple collection of parts?",
  o: [
    ["The parts are produced and delivered together by one organization under a single contract and configuration baseline.",
      "Ownership and contracts do not make something a system. A system can contain elements from many suppliers and organizations."],
    ["The parts are arranged so that together they exhibit behavior or meaning that the parts do not have on their own.",
      "Correct. A system is an arrangement of interacting parts whose combined behavior or meaning (emergent properties) goes beyond what any part provides alone."],
    ["The parts are physically connected to each other and housed within a single enclosure with a defined boundary.",
      "Physical connection is not required. Systems can be geographically distributed, include people and processes, or be purely conceptual."],
    ["The parts each individually satisfy all of the stakeholders' requirements, so any part could stand in for the whole.",
      "Requirements are satisfied by the system as a whole. Individual elements usually only satisfy the requirements allocated to them."],
  ],
  a: 1,
  t: "A system is more than the sum of its parts: interacting elements produce behavior or meaning none of them has alone.",
});

Q({
  id: "I03", d: "intro", b: "understand",
  ref: "SEH5 Ch.1 — Systems Concepts (emergence)",
  s: "A traffic jam forms on a motorway even though every driver is following the rules and no single car is at fault. Which systems concept does this illustrate?",
  o: [
    ["Decomposition of the system into its elements", "Decomposition is breaking a system into smaller elements. The jam is not caused by breaking anything down; it arises from interactions."],
    ["Configuration drift away from the baseline", "Configuration drift is uncontrolled divergence of an item from its documented baseline. It is a configuration management concern, not a behavior pattern of interacting elements."],
    ["Emergence", "Correct. Emergent behavior arises from the interactions of the elements and cannot be found in any single element. It can be desired (a car's ability to transport) or undesired (a jam)."],
    ["Allocation of functions to elements", "Allocation is assigning requirements or functions to system elements. It does not explain behavior arising from interactions."],
  ],
  a: 2,
  t: "Emergent properties (good or bad) come from interactions between elements, which is why SE must look at the whole, not just the parts.",
});

Q({
  id: "I04", d: "intro", b: "remember",
  ref: "SEH5 Ch.1 — Systems Concepts (system of interest)",
  s: "What is the 'system of interest' (SoI)?",
  o: [
    ["The competing system in the market against which your system's performance and cost will be benchmarked.",
      "Competitor systems may be part of the context, but they are not what the term means."],
    ["The system whose life cycle is under consideration — the one the engineering effort is focused on.",
      "Correct. The SoI is the system you are engineering. Everything else (enabling systems, interoperating systems, the environment) is described relative to it."],
    ["The highest-level system in the enterprise hierarchy, of which every project's product is an element.",
      "The SoI can be at any level of the hierarchy. A subsystem can be the SoI for the team developing it."],
    ["The set of systems that support your system during its development, production, training and support.",
      "That describes enabling systems, which are distinct from the SoI."],
  ],
  a: 1,
  t: "The SoI is whatever system you are responsible for; its level in the hierarchy depends on your viewpoint.",
});

Q({
  id: "I05", d: "intro", b: "understand",
  ref: "SEH5 Ch.1 — Systems Concepts (enabling systems)",
  s: "A factory production line, a test rig, and a training simulator used to build, verify, and support an aircraft are best described as what, relative to the aircraft?",
  o: [
    ["Interoperating systems", "Interoperating systems interact with the SoI in operation (e.g., air traffic control). These items support the aircraft's life cycle rather than working with it during its mission."],
    ["System elements", "System elements are parts of the SoI itself (engines, avionics). The production line is not part of the delivered aircraft."],
    ["Enabling systems", "Correct. Enabling systems support the SoI during its life cycle stages (development, production, test, training, support, disposal) but do not contribute directly to its function during operation."],
    ["Constituent systems", "Constituent systems are the independent systems that make up a system of systems; the aircraft plus its factory is not an SoS in that sense."],
  ],
  a: 2,
  t: "Enabling systems support the SoI through its life (build, test, train, support, dispose) without being part of its operational function.",
});

Q({
  id: "I06", d: "intro", b: "understand",
  ref: "SEH5 Ch.1 — Why Is SE Important? (committed life cycle cost)",
  s: "Why does the handbook emphasize doing SE well in the earliest life cycle stages?",
  o: [
    ["Decisions made early commit most of the life cycle cost, even though little has been spent yet.",
      "Correct. Early concept decisions lock in the majority of life cycle cost, and the cost to fix a defect grows dramatically in later stages. Early SE has the greatest leverage."],
    ["Most of the project's budget is actually spent during the concept stage, so errors there waste the most money.",
      "The opposite: relatively little is spent early. The point is that costs are committed early and spent later."],
    ["Requirements are legally frozen at the end of the concept stage and cannot be changed afterwards.",
      "Requirements can change later (through change control), but changes become more expensive. Nothing forbids change."],
    ["Verification of the system against its requirements is completed during the concept stage.",
      "Verification occurs throughout, especially during integration on the right side of the Vee. Early stages plan it but do not complete it."],
  ],
  a: 0,
  t: "Early decisions commit most of the life cycle cost; defects found late cost far more to fix. Front-load SE.",
});

Q({
  id: "I07", d: "intro", b: "understand",
  ref: "SEH5 Ch.1 — Why Is SE Important? (cost to correct defects)",
  s: "A requirements error is discovered during system operation rather than during concept definition. Compared with fixing it early, what does the handbook say about the cost of correcting it?",
  o: [
    ["It is roughly the same, because the size of the change to the requirement is the same whenever it is made.",
      "The change in the requirement may be small, but the rework across design, build, test, documentation and fielded units makes late fixes far more expensive."],
    ["It is usually lower, because far more information about real use is available once the system is operating.",
      "More information exists later, but the rework and disruption it triggers dominate the cost."],
    ["It is typically orders of magnitude higher.",
      "Correct. The handbook's defect cost data show escalation by factors of tens to hundreds (or more) between early and late stages."],
    ["It cannot be meaningfully estimated, so SE practice treats defect timing as irrelevant to cost.",
      "SE explicitly uses this escalation to justify early investment in requirements, analysis and reviews."],
  ],
  a: 2,
  t: "Finding and fixing errors early is dramatically cheaper — the cost escalates by orders of magnitude over the life cycle.",
});

Q({
  id: "I08", d: "intro", b: "remember",
  ref: "SEH5 Ch.1 — Systems Concepts (system boundary)",
  s: "What does the system boundary define?",
  o: [
    ["The physical enclosure that houses the system's hardware and protects it from the environment.",
      "A boundary is not necessarily physical. It is a conceptual line that can include people, processes, software and data."],
    ["What is inside the system of interest and what belongs to its external environment.",
      "Correct. The boundary separates the SoI from its context and makes clear where interfaces with external systems lie, which drives scope and responsibilities."],
    ["The limits of the system's performance envelope, beyond which it is not required to operate.",
      "That would be a performance limit or operating envelope, not a boundary."],
    ["The contractual scope agreed between the acquirer and the supplier for the development effort.",
      "Contract scope is related, but the system boundary is a technical concept about what is part of the system."],
  ],
  a: 1,
  t: "Draw the boundary early: it defines scope, what you control, and where your external interfaces are.",
});

Q({
  id: "I09", d: "intro", b: "understand",
  ref: "SEH5 Ch.1 — Systems Concepts (hierarchy and recursion)",
  s: "Why can the same SE processes be applied at the system level and again at subsystem and component levels?",
  o: [
    ["Because the processes were originally defined for software and are simply reused for other element types.",
      "The processes are not software-specific; they apply to any engineered system."],
    ["Because each level of the hierarchy is managed by a separate project with its own contract.",
      "Contracts may exist at each level, but that's not why the processes apply. They apply because each element can be treated as a system."],
    ["Because each system element can itself be treated as a system, so the processes apply recursively.",
      "Correct. Systems are hierarchical; any system element can be treated as a system of interest in its own right, so the processes are applied recursively down (and iteratively across) the structure."],
    ["Because requirements are only needed at the top level, so lower levels just repeat the same design steps.",
      "Requirements are derived and allocated at each level, not only at the top."],
  ],
  a: 2,
  t: "Processes are applied recursively down the system hierarchy and iteratively within a level.",
});

Q({
  id: "I10", d: "intro", b: "understand",
  ref: "SEH5 Ch.1 — Systems Science and Systems Thinking",
  s: "Which behavior best reflects 'systems thinking' as described in the handbook?",
  o: [
    ["Looking at relationships, feedback loops and context to understand how the whole behaves over time.",
      "Correct. Systems thinking is holistic: it focuses on interconnections, feedback, boundaries and perspectives rather than isolated parts."],
    ["Breaking every problem into its smallest parts and optimizing each part as far as possible on its own.",
      "Pure reductionism. Optimizing parts separately can make the whole worse (sub-optimization); systems thinking balances the whole."],
    ["Following the organization's standard process checklist for every project, without deviation.",
      "Checklists help, but systems thinking is a way of reasoning, not rigid process compliance. The handbook also stresses tailoring."],
    ["Selecting the most advanced technology available for each system element to maximize performance.",
      "Technology choice should follow from needs and trade-offs; 'most advanced' is not systems thinking."],
  ],
  a: 0,
  t: "Systems thinking = the whole, its interconnections, feedback and context — and avoiding sub-optimization of parts.",
});

Q({
  id: "I11", d: "intro", b: "understand",
  ref: "SEH5 Ch.1 — Systems Concepts (complexity)",
  s: "Which statement best distinguishes a complex system from a merely complicated one?",
  o: [
    ["A complex system always has many more parts and interfaces than a complicated one.",
      "Part count alone does not make a system complex; a large but well-understood machine can be complicated but predictable."],
    ["A complicated system cannot be fully understood even by experts using detailed analysis.",
      "Complicated systems can be understood by analysis and expertise; that is what separates them from complex ones."],
    ["A complex system contains software, whereas a complicated system is purely mechanical.",
      "Software can contribute to complexity, but the distinction is about predictability and emergent behavior, not technology."],
    ["A complex system shows emergent, hard-to-predict behavior; a complicated one yields to analysis.",
      "Correct. Complicated problems yield to analysis and expertise; complex ones involve interactions, adaptation and uncertainty that require probing, iteration and learning."],
  ],
  a: 3,
  t: "Complicated = analysable by experts; complex = emergent and unpredictable, needing iterative, learning-based approaches.",
});

Q({
  id: "I12", d: "intro", b: "apply",
  ref: "SEH5 Ch.1 — Systems Concepts (complexity; Cynefin-style sense-making)",
  s: "A team faces a new problem where cause and effect can only be understood in hindsight. Which approach is most appropriate?",
  o: [
    ["Identify the documented best practice for this type of problem and apply it immediately.",
      "Best practices suit clear/simple situations where cause and effect are obvious. They can fail badly in a complex situation."],
    ["Run small, safe-to-fail experiments, observe what happens, and adapt.",
      "Correct. In complex situations you learn by small experiments and adapt (probe, sense, respond). This is why iterative and incremental approaches are recommended for complex problems."],
    ["Bring in experts to perform a full detailed analysis, then execute the resulting plan unchanged.",
      "Analyse-then-execute suits complicated problems. In complex ones, the analysis cannot predict emergent outcomes."],
    ["Act decisively to establish order first, then analyze the situation once it has stabilized.",
      "Act-first to restore order is the response for chaotic situations (e.g., a crisis). Here cause and effect are knowable in hindsight, so experimentation fits better."],
  ],
  a: 1,
  t: "Complex → probe, sense, respond. Complicated → analyse. Clear → best practice. Chaotic → act first.",
});

Q({
  id: "I13", d: "intro", b: "remember",
  ref: "SEH5 Ch.1 — Systems Concepts (stakeholders)",
  s: "Who counts as a stakeholder of a system?",
  o: [
    ["The acquirer who funds the system and signs the contract, since they define what is to be delivered.",
      "The paying customer is one stakeholder, but far from the only one."],
    ["The end users and operators who will interact with the system during its operational use.",
      "Users are important stakeholders, but maintainers, regulators, the public, disposal organizations and others count too."],
    ["Anyone with a right, share, claim or interest in the system across its life.",
      "Correct. Stakeholders include acquirers, users, operators, maintainers, regulators, suppliers, society and more — across the whole life cycle."],
    ["The people who have formal authority to approve the requirements baseline at a decision gate.",
      "Signing authority is a role, not the definition. Many stakeholders never sign anything but still have needs."],
  ],
  a: 2,
  t: "Stakeholders are anyone with an interest in the system across its whole life — not just the customer or the user.",
});

Q({
  id: "I14", d: "intro", b: "understand",
  ref: "SEH5 Ch.1 — Systems Concepts (interoperating systems and context)",
  s: "An air traffic control system that exchanges data with an aircraft during flight is, relative to the aircraft (the SoI), best described as:",
  o: [
    ["An interoperating system in its operational environment", "Correct. It interacts with the SoI during operation, so it is an interoperating (interfacing) system in its context."],
    ["An enabling system that supports the aircraft's life cycle", "Enabling systems support life cycle activities like production or training; they don't interact with the SoI to perform its operational mission."],
    ["A system element within the aircraft's boundary", "It is outside the aircraft's boundary and not under the aircraft project's control."],
    ["A subsystem allocated from the aircraft's architecture", "Subsystems are parts of the SoI; ATC is external to the aircraft."],
  ],
  a: 0,
  t: "Interoperating systems interact with the SoI in operation; enabling systems support its life cycle.",
});

Q({
  id: "I15", d: "intro", b: "understand",
  ref: "SEH5 Ch.1 — What Is Systems Engineering? (SE and other disciplines)",
  s: "What is the relationship between systems engineering and the specialist engineering disciplines (mechanical, electrical, software, etc.)?",
  o: [
    ["On complex projects SE takes over the design responsibilities of the specialist disciplines.",
      "SE does not replace the disciplines; their expertise is essential."],
    ["SE starts once the disciplines have finished their designs, to integrate and test the parts.",
      "SE starts before design (needs, concepts, requirements, architecture) and continues throughout, not only at integration."],
    ["SE integrates the disciplines, owning the whole-system view, interfaces and cross-discipline trade-offs.",
      "Correct. SE is transdisciplinary: it brings the disciplines together, balances competing concerns and owns the system-level view."],
    ["SE is a branch of software engineering that applies its methods to hardware-intensive systems.",
      "SE is not a sub-discipline of software engineering; it spans all domains."],
  ],
  a: 2,
  t: "SE integrates the disciplines and owns the whole-system view; it doesn't replace them.",
});

Q({
  id: "I16", d: "intro", b: "understand",
  ref: "SEH5 Ch.1 — What Is Systems Engineering? (SE and project management)",
  s: "How does the handbook characterize the relationship between systems engineering and project management?",
  o: [
    ["They are the same activity described with different names in different industries.",
      "They overlap but are distinct: PM focuses on managing the project's resources, cost and schedule; SE on the technical definition and realization of the system."],
    ["They are separate activities that should be kept apart to avoid conflicts of interest.",
      "Separation causes problems. The handbook stresses close collaboration because technical and management decisions affect each other."],
    ["Project management is a subset of SE, performed by the lead systems engineer.",
      "Neither is simply a subset of the other."],
    ["They overlap significantly — in planning, risk and decisions — and must work closely together.",
      "Correct. Technical management processes such as planning, risk and decision management are shared ground; success needs both working together."],
  ],
  a: 3,
  t: "SE and PM overlap (planning, risk, decisions, assessment) — they're partners, not the same thing.",
});

Q({
  id: "I17", d: "intro", b: "remember",
  ref: "SEH5 Ch.1 — Systems Concepts (open systems)",
  s: "What characterizes an 'open' system in systems science terms?",
  o: [
    ["Its design documentation and interfaces are publicly available for anyone to use.",
      "That is an 'open' licensing or open-standards sense, not the systems science meaning."],
    ["It exchanges matter, energy or information with its environment.",
      "Correct. Engineered systems are open: they interact with their environment through inputs and outputs across the boundary, which is why context matters."],
    ["It has no defined boundary, so its elements merge with the surrounding environment.",
      "An open system still has a boundary — interactions cross it."],
    ["It can be modified by any stakeholder at any time without formal change control.",
      "That is about change control, not the systems science concept."],
  ],
  a: 1,
  t: "Open systems exchange matter, energy and information across their boundary — so context and interfaces matter.",
});

Q({
  id: "I18", d: "intro", b: "apply",
  ref: "SEH5 Ch.1 — Systems Science and Systems Thinking (sub-optimization)",
  s: "A team makes each subsystem as light as possible on its own. The final vehicle is heavier than planned because of extra brackets, cooling and wiring between subsystems. What systems principle was neglected?",
  o: [
    ["Optimizing the parts does not optimize the whole; interactions and interfaces matter.",
      "Correct. This is sub-optimization. System-level trade-offs and interface design determine the whole-system outcome."],
    ["Mass should not be used as a design driver, because it conflicts with other quality characteristics.",
      "Mass can be a legitimate driver; the issue is optimizing locally rather than at system level."],
    ["Each subsystem should have been designed by a different supplier to encourage competition.",
      "Supplier choice is irrelevant to the principle at stake."],
    ["Requirements should only be allocated to subsystems after integration has shown what is feasible.",
      "Allocation happens before detailed design; waiting until integration would make things worse."],
  ],
  a: 0,
  t: "Local optimization ≠ global optimization. Balance the whole system, including interfaces.",
});
