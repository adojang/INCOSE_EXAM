/* Chapter 2 — Agreement Processes (8) and Organizational Project-Enabling Processes (12) */

Q({
  id: "A01", d: "agreement", b: "remember",
  ref: "SEH5 Ch.2 — Agreement Processes: Acquisition",
  s: "What is the purpose of the Acquisition process?",
  o: [
    ["To obtain a product or service in accordance with the acquirer's requirements.",
      "Correct. Acquisition is performed by the acquirer: prepare, select a supplier, establish and monitor the agreement, and accept the product or service."],
    ["To provide an acquirer with a product or service that meets agreed requirements.", "That is the purpose of the Supply process, performed by the supplier."],
    ["To initiate and sustain the projects needed to meet the organization's strategy.", "That is Portfolio Management."],
    ["To establish a capability for the system to provide services where it is used.", "That is the Transition process."],
  ],
  a: 0,
  t: "Acquisition = the buyer's process; Supply = the seller's process.",
});

Q({
  id: "A02", d: "agreement", b: "remember",
  ref: "SEH5 Ch.2 — Agreement Processes: Supply",
  s: "What is the purpose of the Supply process?",
  o: [
    ["To define and maintain the organization's policies, processes and life cycle models.", "That is Life Cycle Model Management."],
    ["To obtain a product or service in accordance with the acquirer's requirements.", "That is Acquisition — the buyer's side."],
    ["To provide an acquirer with a product or service that meets agreed requirements.",
      "Correct. The supplier identifies an opportunity, responds to the tender, establishes and executes the agreement, and delivers the product or service."],
    ["To sustain the capability of the delivered system to provide its service over time.", "That is the Maintenance process (which may be supplied under an agreement, but isn't the Supply process purpose)."],
  ],
  a: 2,
  t: "Supply: respond, agree, deliver what was agreed.",
});

Q({
  id: "A03", d: "agreement", b: "apply",
  ref: "SEH5 Ch.2 — Agreement Processes: Acquisition",
  s: "An organization issues a request for proposal, evaluates bids against weighted criteria, and selects a subcontractor. Which process is it performing?",
  o: [
    ["Supply", "The organization issuing the request and selecting is the buyer, so this is not Supply."],
    ["Acquisition", "Correct. Preparing the request, evaluating responses and selecting a supplier are core Acquisition activities."],
    ["Portfolio Management", "Portfolio Management decides which projects to pursue, not which supplier to use within a project."],
    ["Decision Management", "Decision Management techniques may support the evaluation, but the process being performed is Acquisition."],
  ],
  a: 1,
  t: "Issue RFP, evaluate bids, choose a supplier → Acquisition.",
});

Q({
  id: "A04", d: "agreement", b: "understand",
  ref: "SEH5 Ch.2 — Agreement Processes (applicability)",
  s: "Can the Agreement processes be used between two departments within the same company?",
  o: [
    ["No — they apply only to legally binding contracts between separate legal entities.", "The handbook and ISO/IEC/IEEE 15288 explicitly allow agreements between internal organizational units."],
    ["Only when the two departments report to different executives and have separate budgets.", "Reporting lines and budgets are not the criterion; any buyer–supplier relationship can use them."],
    ["Only for purchased software products, where licence terms must be agreed in writing.", "Agreement processes apply to any product or service."],
    ["Yes — they can be used for agreements inside one organization as well as with external parties.",
      "Correct. Internal agreements (e.g., a work authorization between departments) benefit from the same clarity on requirements, acceptance and responsibilities."],
  ],
  a: 3,
  t: "Agreement processes work for internal as well as external buyer–supplier relationships.",
});

Q({
  id: "A05", d: "agreement", b: "understand",
  ref: "SEH5 Ch.2 — Agreement Processes: Acquisition (monitoring the agreement)",
  s: "During execution of a contract, the acquirer tracks the supplier's progress, reviews technical data and manages agreed changes. This activity is part of:",
  o: [
    ["Acquisition — monitoring the agreement", "Correct. The acquirer assesses execution of the agreement, communicates with the supplier, and handles changes through the agreed procedures."],
    ["Supply — executing the agreement", "Executing the agreement is what the supplier does; tracking the supplier is the acquirer's job."],
    ["Project Assessment and Control of the supplier's project", "The acquirer doesn't run the supplier's project control; it monitors the agreement from its side."],
    ["Quality Management at the organizational level", "Organizational quality management sets quality objectives; supplier monitoring belongs to Acquisition."],
  ],
  a: 0,
  t: "Acquirer monitors the agreement; supplier executes it.",
});

Q({
  id: "A06", d: "agreement", b: "apply",
  ref: "SEH5 Ch.2 — Agreement Processes: Supply",
  s: "A company evaluates a customer's request for proposal, decides to bid, and prepares its response. Which process is being performed?",
  o: [
    ["Acquisition", "The company is responding as a potential seller, not buying."],
    ["Business or Mission Analysis", "BMA defines the problem space for a system; bid preparation for a customer's request is Supply."],
    ["Supply", "Correct. Identifying opportunities, evaluating a request and responding to it are the first Supply activities."],
    ["Portfolio Management", "Portfolio Management may approve the bid internally, but responding to the tender is Supply."],
  ],
  a: 2,
  t: "Responding to someone else's RFP → Supply.",
});

Q({
  id: "A07", d: "agreement", b: "understand",
  ref: "SEH5 Ch.2 — Agreement Processes (acceptance)",
  s: "What typically happens when the acquirer 'accepts' the product under the Acquisition process?",
  o: [
    ["The supplier is authorized to start detailed design against the agreed requirements baseline.",
      "Detailed design happens long before acceptance."],
    ["The acquirer confirms the delivery meets the agreement, then pays and takes ownership.",
      "Correct. Acceptance closes the loop: check delivery against the agreement, then pay and take responsibility."],
    ["The acquirer's operators begin retiring the legacy system and disposing of its elements.",
      "Retirement of a legacy system may follow, but it is not what acceptance means."],
    ["The requirements are rewritten to match what the supplier actually delivered.",
      "Acceptance checks against agreed requirements; it doesn't rewrite them."],
  ],
  a: 1,
  t: "Acceptance = confirm it meets the agreement, then pay and take ownership.",
});

Q({
  id: "A08", d: "agreement", b: "understand",
  ref: "SEH5 Ch.2 — Agreement Processes (establishing and maintaining the agreement)",
  s: "Midway through a contract, the acquirer needs a new capability. According to good practice, how should this be handled?",
  o: [
    ["The supplier should add it informally to maintain goodwill, and absorb the cost.", "Informal scope growth undermines cost, schedule and configuration control."],
    ["The acquirer should terminate the contract and re-compete the whole scope.", "Termination is extreme; agreements normally include change procedures."],
    ["It should be deferred automatically to a follow-on contract without analysis.", "It may be deferred, but only as a deliberate, evaluated decision."],
    ["Assess its impact and incorporate it through the agreement's change procedures.",
      "Correct. Agreements are maintained: changes are evaluated (cost, schedule, risk, technical impact) and negotiated through defined procedures."],
  ],
  a: 3,
  t: "Agreement changes go through defined change procedures with impact assessment.",
});

Q({
  id: "O01", d: "org", b: "remember",
  ref: "SEH5 Ch.2 — Organizational Project-Enabling Processes: Life Cycle Model Management",
  s: "What is the purpose of the Life Cycle Model Management process?",
  o: [
    ["To manage and control system elements and their configurations over the life cycle.", "That is Configuration Management."],
    ["To initiate and sustain the projects needed to meet the organization's strategic objectives.", "That is Portfolio Management."],
    ["To define, maintain and assure availability of the organization's processes and life cycle models.",
      "Correct. This process owns the organization's policies, processes, models and procedures, and improves them based on assessments and lessons."],
    ["To provide the organization with necessary people and maintain their competencies.", "That is Human Resource Management."],
  ],
  a: 2,
  t: "LCM Model Management owns and improves the organization's process set and life cycle models.",
});

Q({
  id: "O02", d: "org", b: "remember",
  ref: "SEH5 Ch.2 — Organizational Project-Enabling Processes: Infrastructure Management",
  s: "Which process provides projects with the facilities, tools, IT and communications they need?",
  o: [
    ["Infrastructure Management", "Correct. It provides and maintains the infrastructure and services that support organizational and project objectives."],
    ["Knowledge Management", "Knowledge Management handles knowledge assets like lessons learned and patterns, not physical/IT infrastructure."],
    ["Project Planning", "Project Planning identifies what infrastructure a project needs, but the organization provides it via Infrastructure Management."],
    ["Information Management", "Information Management handles the project's information items, not facilities and tools."],
  ],
  a: 0,
  t: "Facilities, tools, IT environments → Infrastructure Management.",
});

Q({
  id: "O03", d: "org", b: "remember",
  ref: "SEH5 Ch.2 — Organizational Project-Enabling Processes: Portfolio Management",
  s: "What is the purpose of the Portfolio Management process?",
  o: [
    ["To assess project status against plans and direct corrective action when needed.", "That is Project Assessment and Control."],
    ["To initiate and sustain necessary, sufficient and suitable projects to meet strategy.",
      "Correct. It also allocates resources across projects and redirects or terminates projects that no longer justify investment."],
    ["To manage the baselines and approved changes of every product the organization sells.", "That is Configuration Management."],
    ["To manage the family of product variants offered to different market segments.", "Product lines are a different concept (product line engineering)."],
  ],
  a: 1,
  t: "Portfolio Management picks, funds, balances and ends projects to meet strategy.",
});

Q({
  id: "O04", d: "org", b: "apply",
  ref: "SEH5 Ch.2 — Organizational Project-Enabling Processes: Portfolio Management",
  s: "An organization reviews its active projects and decides to cancel one whose business case no longer supports strategic goals, redirecting its funding to another. Which process is this?",
  o: [
    ["Decision Management", "Decision Management is a project-level technical management process; cancelling and rebalancing projects across the organization is Portfolio Management."],
    ["Risk Management", "Risk may inform the decision, but reallocating across projects is Portfolio Management."],
    ["Portfolio Management", "Correct. Evaluating the project portfolio, terminating projects and reallocating resources are core Portfolio Management activities."],
    ["Project Assessment and Control", "That process can recommend termination of its own project, but the cross-project decision is Portfolio Management."],
  ],
  a: 2,
  t: "Across-project start/stop/fund decisions → Portfolio Management.",
});

Q({
  id: "O05", d: "org", b: "remember",
  ref: "SEH5 Ch.2 — Organizational Project-Enabling Processes: Human Resource Management",
  s: "What is the purpose of the Human Resource Management process?",
  o: [
    ["To assign individual engineers to tasks in the project schedule and track their effort.", "Task assignment is project planning and control."],
    ["To define the skills, training and staffing needed to operate the delivered system.", "Operator skills are part of human systems integration and training, not this organizational process."],
    ["To capture lessons learned from staff so that future projects can reuse them.", "That is Knowledge Management."],
    ["To provide the organization with necessary people and maintain their competencies.",
      "Correct. It identifies skills needed, develops and acquires people, and maintains competencies consistent with business needs."],
  ],
  a: 3,
  t: "HR Management ensures the organization has competent people for its projects.",
});

Q({
  id: "O06", d: "org", b: "understand",
  ref: "SEH5 Ch.2 — Organizational Project-Enabling Processes: Quality Management; Technical Management: Quality Assurance",
  s: "How does the Quality Management process differ from the Quality Assurance process?",
  o: [
    ["Quality Management is organization-wide; Quality Assurance applies it within a project.",
      "Correct. QM sets organizational quality policies, objectives and customer-satisfaction goals (project-enabling); QA is a project technical management process."],
    ["They are the same process; ISO/IEC/IEEE 15288 simply lists it twice under different names.",
      "The standard defines them as separate processes with different scopes."],
    ["Quality Assurance is organization-wide; Quality Management applies it within a project.",
      "This reverses them."],
    ["Quality Management applies to manufacturing; Quality Assurance applies to engineering.",
      "Both apply across all products and services; the difference is organizational vs project scope."],
  ],
  a: 0,
  t: "Quality Management = organization-wide; Quality Assurance = within the project.",
});

Q({
  id: "O07", d: "org", b: "remember",
  ref: "SEH5 Ch.2 — Organizational Project-Enabling Processes: Knowledge Management",
  s: "What is the purpose of the Knowledge Management process?",
  o: [
    ["To generate, retain and disseminate the project's information to designated stakeholders.", "That is Information Management (project information items)."],
    ["To create the capability and assets that let the organization reapply existing knowledge.",
      "Correct. Knowledge Management captures, shares and reuses knowledge such as lessons learned, patterns and reusable assets."],
    ["To provide the organization with necessary people and maintain their competencies.", "That is Human Resource Management."],
    ["To collect and analyze objective data to support management and demonstrate quality.", "That is Measurement."],
  ],
  a: 1,
  t: "Knowledge Management = capture and reuse organizational knowledge (lessons learned, patterns, assets).",
});

Q({
  id: "O08", d: "org", b: "apply",
  ref: "SEH5 Ch.2 — Organizational Project-Enabling Processes: Knowledge Management vs Technical Management: Information Management",
  s: "A company builds a searchable repository of lessons learned and reusable architecture patterns so future projects can benefit. Which process does this primarily support?",
  o: [
    ["Information Management", "Information Management handles a project's information items (plans, reports, data) — this effort targets reuse across projects."],
    ["Configuration Management", "CM controls baselines and changes; it isn't about sharing lessons across projects."],
    ["Knowledge Management", "Correct. Organizational capture and reuse of lessons and patterns is the heart of Knowledge Management."],
    ["Measurement", "Measurement collects and analyses data about processes and products, not reusable knowledge assets."],
  ],
  a: 2,
  t: "Lessons learned + reusable patterns across projects → Knowledge Management.",
});

Q({
  id: "O09", d: "org", b: "apply",
  ref: "SEH5 Ch.2 — Organizational Project-Enabling Processes: Human Resource Management",
  s: "The organization runs a program to grow model-based systems engineering skills across its engineering workforce. Which process does this represent?",
  o: [
    ["Infrastructure Management", "Providing MBSE tools is infrastructure; developing people's skills is HR Management."],
    ["Human Resource Management", "Correct. Developing and maintaining staff competencies is a core HR Management activity."],
    ["Life Cycle Model Management", "This process defines processes and methods; it may call for MBSE, but skill development is HR Management."],
    ["Project Planning", "Project planning identifies needed skills for a project; organization-wide development is HR Management."],
  ],
  a: 1,
  t: "Building competencies across the organization → Human Resource Management.",
});

Q({
  id: "O10", d: "org", b: "apply",
  ref: "SEH5 Ch.2 — Organizational Project-Enabling Processes: Life Cycle Model Management",
  s: "After process assessments, the organization updates its standard SE process descriptions and tailoring guidance. Which process is this?",
  o: [
    ["Quality Assurance", "QA checks a project's compliance; updating the organization's standard processes is LCM Model Management."],
    ["Portfolio Management", "Portfolio Management deals with projects, not process definitions."],
    ["Human Resource Management", "HR Management develops people's competencies; owning and improving process definitions is LCM Model Management."],
    ["Life Cycle Model Management", "Correct. Assessing and improving the organization's processes and models is part of this process."],
  ],
  a: 3,
  t: "Defining and improving the standard processes → Life Cycle Model Management.",
});

Q({
  id: "O11", d: "org", b: "understand",
  ref: "SEH5 Ch.2 — Organizational Project-Enabling Processes (overview)",
  s: "Why are the organizational project-enabling processes important to individual projects?",
  o: [
    ["They replace project-level planning by giving every project a ready-made, fixed plan to follow.",
      "Projects still plan; these processes provide the environment for them."],
    ["They define the technical requirements that every product of the organization must meet.",
      "Technical requirements come from technical processes within projects."],
    ["They give the organization the processes, people, infrastructure and knowledge projects draw on.",
      "Correct. They provide the capability — processes, infrastructure, people, knowledge and a managed project portfolio — that projects need to acquire and supply products and services."],
    ["They are needed only in very large organizations with many concurrent programs.",
      "Any organization running projects needs these capabilities, even if informally."],
  ],
  a: 2,
  t: "Project-enabling processes give projects the organizational capability they need to succeed.",
});

Q({
  id: "O12", d: "org", b: "remember",
  ref: "SEH5 Ch.2 — Organizational Project-Enabling Processes (list)",
  s: "Which of the following is an organizational project-enabling process in ISO/IEC/IEEE 15288:2023 and the handbook?",
  o: [
    ["Risk Management", "Risk Management is a technical management process."],
    ["Configuration Management", "Configuration Management is a technical management process."],
    ["Acquisition", "Acquisition is an agreement process."],
    ["Knowledge Management", "Correct. The six are: Life Cycle Model Management, Infrastructure Management, Portfolio Management, Human Resource Management, Quality Management and Knowledge Management."],
  ],
  a: 3,
  t: "Org project-enabling (6): LCM Model, Infrastructure, Portfolio, HR, Quality Mgmt, Knowledge Mgmt.",
});
