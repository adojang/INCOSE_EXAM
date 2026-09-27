/* Chapter 2 — Life Cycle Concepts, Stages and Models (22) */

Q({
  id: "L01", d: "lifecycle", b: "remember",
  ref: "SEH5 Ch.2 — Generic Life Cycle Stages",
  s: "Which list shows the generic system life cycle stages used in the handbook?",
  o: [
    ["Requirements, Design, Build, Test, Deploy, Maintain", "That is a typical software/waterfall activity list, not the handbook's generic stages."],
    ["Concept, Development, Production, Utilization, Support, Retirement",
      "Correct. These six generic stages (from ISO/IEC/IEEE 24748-1) are the handbook's reference; Utilization and Support usually run in parallel."],
    ["Initiation, Planning, Execution, Monitoring and Control, Closing", "Those are project management process groups, not system life cycle stages."],
    ["Analysis, Architecture, Implementation, Integration, Verification, Validation", "Those are technical processes, which can be used in any stage — they are not stages."],
  ],
  a: 1,
  t: "Generic stages: Concept → Development → Production → Utilization ∥ Support → Retirement.",
});

Q({
  id: "L02", d: "lifecycle", b: "understand",
  ref: "SEH5 Ch.2 — Generic Life Cycle Stages (Concept stage)",
  s: "What is the main purpose of the Concept stage?",
  o: [
    ["To build and qualify the first production-representative units and confirm the production process is capable.",
      "Producing and qualifying units belongs to the end of Development and to Production."],
    ["To operate an early version of the system with users and collect performance data for improvement.",
      "Operation happens in Utilization (early operational trials may occur, but that's not the stage's purpose)."],
    ["To understand the problem and stakeholder needs, explore concepts, and propose a viable solution.",
      "Correct. Concept work includes business or mission analysis, stakeholder needs, exploratory research, concept selection and early prototyping to reduce risk."],
    ["To produce the detailed drawings, code and specifications needed for every system element.",
      "Detailed design is Development-stage work."],
  ],
  a: 2,
  t: "Concept stage: understand the problem and needs, explore and select a feasible concept.",
});

Q({
  id: "L03", d: "lifecycle", b: "understand",
  ref: "SEH5 Ch.2 — Generic Life Cycle Stages (Development stage)",
  s: "Which activity is characteristic of the Development stage?",
  o: [
    ["Defining, designing, integrating, verifying and validating the system so it can be produced.",
      "Correct. Development turns the selected concept into a verified and validated system design ready for production."],
    ["Deciding whether a business or mission opportunity justifies investing in a new system at all.",
      "That is early Concept-stage (business or mission analysis) work."],
    ["Planning and carrying out the safe removal of the system from service and handling its materials.",
      "That is the Retirement stage."],
    ["Manufacturing, assembling and delivering the system in the quantities needed by the users.",
      "That is the Production stage."],
  ],
  a: 0,
  t: "Development = define, design, integrate, verify and validate the system so it can be built.",
});

Q({
  id: "L04", d: "lifecycle", b: "understand",
  ref: "SEH5 Ch.2 — Generic Life Cycle Stages (Utilization and Support)",
  s: "Which two generic stages normally run in parallel?",
  o: [
    ["Concept and Retirement", "These are at opposite ends of the life cycle (although retirement is planned during Concept)."],
    ["Development and Retirement", "These do not run concurrently for the same system."],
    ["Production and Concept", "Concept precedes Production; they are not normally concurrent."],
    ["Utilization and Support", "Correct. While the system is being used (Utilization), it is being sustained — maintained, supplied, repaired (Support)."],
  ],
  a: 3,
  t: "Utilization and Support happen together: the system is used and sustained at the same time.",
});

Q({
  id: "L05", d: "lifecycle", b: "understand",
  ref: "SEH5 Ch.2 — Decision Gates",
  s: "What is the primary purpose of a decision gate between life cycle stages?",
  o: [
    ["To mark the formal handover of all project deliverables from the engineering team to the customer.",
      "Handover is one possible activity near transition, not the purpose of every gate."],
    ["To decide, based on evidence of readiness, whether and how the project proceeds.",
      "Correct. Gates control progression: they check exit criteria, risks and business case, and decide the path forward."],
    ["To freeze all requirements permanently so that no further changes can be made in later stages.",
      "Gates may establish baselines, but baselines can change through controlled change management."],
    ["To perform the detailed technical review of each design drawing before it is released to manufacturing.",
      "Detailed design checks are part of technical reviews and verification; a gate is a higher-level go/no-go decision."],
  ],
  a: 1,
  t: "Decision gates are governance checkpoints: are we ready, and should we proceed?",
});

Q({
  id: "L06", d: "lifecycle", b: "apply",
  ref: "SEH5 Ch.2 — Decision Gates (decision options)",
  s: "At a decision gate, reviewers find that the project is close to meeting the exit criteria but a few analyses are incomplete. The business case is still sound. Which gate outcome is most appropriate?",
  o: [
    ["Terminate the project and release its resources to other work", "Termination is for when the business case or viability no longer holds, which is not the case here."],
    ["Execute the next stage and leave the incomplete analyses unresolved", "Proceeding with known gaps without managing them adds risk. The criteria exist for a reason."],
    ["Continue the current stage to finish the missing work, then return", "Correct. Typical gate options are: execute next stage, continue this stage, go back to a preceding stage, hold activity, or terminate. 'Continue' fits unfinished work with a sound case."],
    ["Go back to the start of the Concept stage and repeat it", "Returning to an earlier stage is for fundamental problems, not for a few incomplete analyses."],
  ],
  a: 2,
  t: "Gate options: proceed, continue this stage, go back, hold, or terminate. Match the option to the evidence.",
});

Q({
  id: "L07", d: "lifecycle", b: "understand",
  ref: "SEH5 Ch.2 — Life Cycle Models (the Vee model)",
  s: "In the Vee model, what does the left side of the 'V' represent?",
  o: [
    ["Integration of elements and verification and validation at each successive level", "That is the right side, moving upward from components to the full system."],
    ["Operation, maintenance and eventual disposal of the delivered system", "The Vee focuses on development; operations sit beyond the top-right."],
    ["Decomposition and definition, from stakeholder needs down to element design", "Correct. The left side goes top-down: needs → requirements → architecture → design of elements."],
    ["Coding and unit testing of the software components of the system", "The Vee applies to whole systems; implementation sits at the bottom point, not on the left side."],
  ],
  a: 2,
  t: "Vee left = decompose and define (top-down); right = integrate, verify, validate (bottom-up).",
});

Q({
  id: "L08", d: "lifecycle", b: "understand",
  ref: "SEH5 Ch.2 — Life Cycle Models (the Vee model)",
  s: "In the Vee model, what do the horizontal links between the left and right sides represent?",
  o: [
    ["Each level's requirements determine how that level is verified and validated on the right.",
      "Correct. Each level's definition (left) is paired with its verification/validation (right); verification approaches should be planned as requirements are written."],
    ["The flow of funding and approvals from the acquirer to the supplier at each milestone.",
      "The Vee does not model funding."],
    ["That work on the right side can be reduced when work on the left side was done well.",
      "Good definition never removes the need for integration, verification and validation."],
    ["The delivery of configuration items from the supplier to the customer at each level.",
      "Deliveries occur, but the horizontal links specifically connect definition with V&V at each level."],
  ],
  a: 0,
  t: "Plan verification when you write the requirement — each Vee level on the left is checked at the same level on the right.",
});

Q({
  id: "L09", d: "lifecycle", b: "understand",
  ref: "SEH5 Ch.2 — Life Cycle Models (Vee: off-core activities)",
  s: "In the Vee model, 'off-core' activities such as early prototyping or technology investigation are performed to:",
  o: [
    ["Provide the formal verification evidence for requirements, so later testing is not needed.",
      "Off-core work informs decisions; it does not replace formal verification."],
    ["Reduce risk by exploring uncertainties before committing to the baseline.",
      "Correct. Off-core studies (e.g., prototypes of a risky element) explore uncertainties early, so issues aren't discovered late on the right side of the V."],
    ["Deliver the final product faster by skipping the detailed design of low-risk elements.",
      "They don't skip design; they de-risk it."],
    ["Keep specialist teams productive while waiting for decision gate approvals.",
      "They have a specific risk-reduction purpose, not a staffing one."],
  ],
  a: 1,
  t: "Off-core investigations reduce risk early — look ahead before you commit the baseline.",
});

Q({
  id: "L10", d: "lifecycle", b: "remember",
  ref: "SEH5 Ch.2 — Life Cycle Models (sequential, incremental, evolutionary)",
  s: "Which situation best suits a sequential (plan-driven, 'once-through') life cycle approach?",
  o: [
    ["Requirements are uncertain and users will only know what they want after trying early versions.", "Uncertain needs favour iterative, incremental or agile approaches."],
    ["The technology is immature and the market environment changes every few weeks.", "High uncertainty and change make sequential approaches risky."],
    ["Users need a basic capability quickly, with more features to follow later.", "That calls for an incremental approach."],
    ["Requirements are stable and well understood, and the technology is mature.",
      "Correct. When the problem and solution are well understood, a single pass with strong upfront planning is efficient and predictable."],
  ],
  a: 3,
  t: "Stable needs + mature technology → sequential works. Uncertainty → iterative/incremental/evolutionary.",
});

Q({
  id: "L11", d: "lifecycle", b: "understand",
  ref: "SEH5 Ch.2 — Life Cycle Models (incremental vs evolutionary)",
  s: "What best distinguishes an evolutionary approach from a purely incremental approach?",
  o: [
    ["In evolutionary development the end-state requirements are refined with each build; incremental development delivers a known requirement set in planned pieces.",
      "Correct. Incremental = known requirements delivered in chunks. Evolutionary = requirements and solution evolve as you learn."],
    ["In evolutionary development nothing is delivered to users until the final build, whereas incremental development delivers something usable after every build.",
      "Evolutionary approaches deliver capability repeatedly; that's their point."],
    ["In incremental development requirements are not documented at all, whereas evolutionary development relies on a complete, frozen requirements specification.",
      "It's the reverse: incremental relies on a defined requirement set, evolutionary lets it evolve."],
    ["They are two names for the same approach; the handbook uses the terms interchangeably for any multi-build life cycle.",
      "They are related but distinct; the difference lies in how well the end-state is known up front."],
  ],
  a: 0,
  t: "Incremental: known end-state, delivered in pieces. Evolutionary: end-state emerges through learning.",
});

Q({
  id: "L12", d: "lifecycle", b: "remember",
  ref: "SEH5 Ch.2 — Life Cycle Models (spiral model)",
  s: "What primarily drives each cycle of the spiral model?",
  o: [
    ["A fixed timebox (e.g., two weeks) after which a working increment must be demonstrated", "Fixed timeboxes are typical of agile methods; the spiral is driven by risk."],
    ["Completion of the full documentation set required for the next formal review", "Documentation is a by-product, not the driver."],
    ["Resolving the highest remaining risks before committing further resources", "Correct. The spiral is risk-driven: each loop analyses risks, reduces them (e.g., with prototypes), and then commits to the next level of development."],
    ["The acquirer's funding cycle, with one loop per annual budget allocation", "Budget cycles may constrain a project but don't define the spiral."],
  ],
  a: 2,
  t: "Spiral = risk-driven iteration: each loop tackles the biggest risks before committing more.",
});

Q({
  id: "L13", d: "lifecycle", b: "understand",
  ref: "SEH5 Ch.2 — Life Cycle Models (Incremental Commitment Spiral Model)",
  s: "Which is a key principle of the Incremental Commitment Spiral Model (ICSM)?",
  o: [
    ["Commit the full life cycle budget at the start so that stakeholders stay engaged", "ICSM does the opposite: commitments are made incrementally as evidence reduces risk."],
    ["Evidence- and risk-based decisions at each commitment milestone", "Correct. ICSM principles include stakeholder value-based guidance, incremental commitment and accountability, concurrent multidisciplinary engineering, and evidence- and risk-based decisions."],
    ["Sequential engineering by one discipline at a time to avoid rework between them", "ICSM stresses concurrent multidisciplinary engineering."],
    ["Deferring stakeholder involvement until validation to avoid requirements churn", "ICSM stresses stakeholder value throughout."],
  ],
  a: 1,
  t: "ICSM: stakeholder value, incremental commitment, concurrent engineering, evidence- and risk-based decisions.",
});

Q({
  id: "L14", d: "lifecycle", b: "understand",
  ref: "SEH5 Ch.2 — Life Cycle Models (agile) and Ch.4 Agile SE",
  s: "Which statement about agile approaches is consistent with the handbook?",
  o: [
    ["Agile teams do not need up-front planning or architecture, because the design emerges entirely from the code.",
      "Agile still plans and still needs architecture; it plans in shorter, adaptive cycles."],
    ["Agile can only be applied to pure software products, because hardware cannot be changed between iterations.",
      "The handbook discusses agile SE for systems that include hardware too, adapted to their constraints."],
    ["Agile replaces formal verification with customer feedback, so separate verification activities are not needed.",
      "Verification is continuous in agile, not eliminated."],
    ["Agile uses short iterative cycles with frequent feedback to handle uncertainty and change.",
      "Correct. Agile's value is in fast learning loops, frequent integration and responsiveness to change."],
  ],
  a: 3,
  t: "Agile = short cycles, frequent feedback, embrace change — still planned, architected and verified.",
});

Q({
  id: "L15", d: "lifecycle", b: "understand",
  ref: "SEH5 Ch.2 — Life Cycle Model Concepts (processes vs stages)",
  s: "How do the SE processes (e.g., System Requirements Definition, Verification) relate to the life cycle stages?",
  o: [
    ["Each process belongs to exactly one stage and is performed only during that stage.",
      "Processes are not tied to one stage."],
    ["The processes are used only in Development; other stages use operational procedures instead.",
      "Processes such as risk, configuration management and verification are used in all stages."],
    ["Any process can be used in any stage, with different emphasis as the system matures.",
      "Correct. Stages structure the life cycle; processes are applied throughout, with different emphasis in each stage."],
    ["The stages have been replaced by processes in the latest edition of ISO/IEC/IEEE 15288.",
      "Both concepts are used together."],
  ],
  a: 2,
  t: "Stages = where the system is in its life; processes = what you do, usable in any stage.",
});

Q({
  id: "L16", d: "lifecycle", b: "remember",
  ref: "SEH5 Ch.2 — Life Cycle Model Concepts (iteration, recursion, concurrency)",
  s: "In the handbook, what is meant by the recursive application of processes?",
  o: [
    ["Repeating a process at the same level until its outcome is acceptable", "That is iteration."],
    ["Performing two or more processes at the same time on the same element", "That is concurrency."],
    ["Applying the same processes at successive levels of the system structure", "Correct. Recursion means the processes are reapplied at each level down the hierarchy (system → subsystem → component)."],
    ["Returning to a preceding life cycle stage after a decision gate", "That's a gate outcome, not recursion."],
  ],
  a: 2,
  t: "Iteration = repeat at the same level; recursion = repeat at successive levels; concurrency = in parallel.",
});

Q({
  id: "L17", d: "lifecycle", b: "understand",
  ref: "SEH5 Ch.2 — Generic Life Cycle Stages (Production)",
  s: "Which of the following belongs primarily to the Production stage?",
  o: [
    ["Manufacturing, testing and delivering the system in the quantities needed.",
      "Correct. Production makes the product. It may also surface producibility issues that trigger changes."],
    ["Evaluating alternative concepts and selecting the preferred one for development.",
      "Concept selection belongs to the Concept stage."],
    ["Preparing the business case and identifying the capability gap to be filled.",
      "Business case work is early Concept stage."],
    ["Recycling materials and sanitizing data from units taken out of service.",
      "That is part of Retirement."],
  ],
  a: 0,
  t: "Production = build it in quantity (and fix producibility issues that appear).",
});

Q({
  id: "L18", d: "lifecycle", b: "understand",
  ref: "SEH5 Ch.2 — Generic Life Cycle Stages (Retirement)",
  s: "When should planning for the Retirement stage begin?",
  o: [
    ["When the system reaches the end of its design life and stops meeting its requirements", "By then options are limited and costs are high."],
    ["During the Concept stage, as part of the life cycle concepts", "Correct. Retirement/disposal constraints (hazardous materials, recycling, data destruction, regulations) affect design and cost, so they must be considered from the start."],
    ["Once the customer formally requests a disposal plan under the support contract", "Retirement planning is a design responsibility, not merely a customer request."],
    ["Only if the system contains hazardous materials that are regulated", "All systems eventually retire; hazards make it more important, not the only trigger."],
  ],
  a: 1,
  t: "Plan disposal/retirement from Concept — it drives design choices and life cycle cost.",
});

Q({
  id: "L19", d: "lifecycle", b: "understand",
  ref: "SEH5 Ch.2 — Life Cycle Model Concepts (tailoring the life cycle model)",
  s: "What should determine which life cycle model a project uses?",
  o: [
    ["The model the organization used on its most recent successful project, to keep practices consistent.",
      "Reuse is sensible only if the new project's characteristics are similar."],
    ["The model that the acquirer's contract template names, regardless of the project's characteristics.",
      "Contract requirements matter, but the model should still be tailored to the project's risk and uncertainty."],
    ["The project's characteristics — uncertainty, risk, complexity, needs and constraints.",
      "Correct. The handbook stresses selecting and tailoring the model to fit the situation."],
    ["Always the Vee model, because ISO/IEC/IEEE 15288 requires it for all systems.",
      "The standard does not mandate any particular model."],
  ],
  a: 2,
  t: "Choose and tailor the life cycle model to the project's risk, uncertainty and constraints.",
});

Q({
  id: "L20", d: "lifecycle", b: "remember",
  ref: "SEH5 Ch.2 — Generic Life Cycle Stages (Support)",
  s: "What is the purpose of the Support stage?",
  o: [
    ["To provide logistics, maintenance and support services that sustain operation.",
      "Correct. Support keeps the system available: spares, repairs, upgrades, training, help desks, etc."],
    ["To develop the business case and concept for a follow-on replacement system.",
      "That would be a new Concept-stage effort."],
    ["To perform the initial verification of the design before production begins.",
      "Design verification belongs to Development."],
    ["To support the acquirer's staff in writing the stakeholder requirements.",
      "Requirements support is Concept-stage work, not the Support stage."],
  ],
  a: 0,
  t: "Support stage sustains operation: maintenance, logistics, spares, upgrades.",
});

Q({
  id: "L21", d: "lifecycle", b: "apply",
  ref: "SEH5 Ch.2 — Life Cycle Models (incremental/evolutionary delivery)",
  s: "A customer urgently needs a basic capability in the field within a year, with more features to follow as technology matures. Which approach fits best?",
  o: [
    ["A single-pass sequential approach that delivers the full capability once all requirements are met", "This would delay the urgently needed basic capability."],
    ["An incremental or evolutionary approach delivering an initial capability first", "Correct. Early usable increments meet the urgent need and allow later increments to benefit from maturing technology and user feedback."],
    ["Waiting until all required technologies are mature, then starting the Concept stage", "That ignores the urgent need."],
    ["Skipping the Concept stage entirely so development can start immediately", "Skipping concept work usually adds risk and cost later."],
  ],
  a: 1,
  t: "Need something now and more later? Deliver incrementally/evolutionarily.",
});

Q({
  id: "L22", d: "lifecycle", b: "understand",
  ref: "SEH5 Ch.2 — Life Cycle Model Concepts (life cycle model definition)",
  s: "What is a life cycle model?",
  o: [
    ["A reliability model that predicts how long the system will remain in service before wear-out.",
      "That describes a reliability or service life analysis, not a life cycle model."],
    ["A framework of processes and activities, organized into stages, that serves as a common reference.",
      "Correct. A life cycle model structures the work into stages with gates and shows how processes are applied."],
    ["A physical or digital mock-up of the system used to demonstrate its concept to stakeholders.",
      "That is a prototype or model of the product, not of the life cycle."],
    ["The contract schedule that links milestone payments to the delivery of project documents.",
      "Payments may align to milestones but that's not a life cycle model."],
  ],
  a: 1,
  t: "A life cycle model = stages + processes + gates: a shared framework for how the system moves through life.",
});
