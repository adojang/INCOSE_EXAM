/* Chapter 2 — Technical Management Processes (36) */

/* ---- Project Planning (5) ---- */
Q({
  id: "M01", d: "techmgmt", b: "remember",
  ref: "SEH5 Ch.2 — Technical Management Processes: Project Planning",
  s: "What is the purpose of the Project Planning process?",
  o: [
    ["To produce and coordinate effective and workable plans.",
      "Correct. It defines scope, activities, schedule, resources, roles, and the technical approach (e.g., the SEMP), and coordinates them into workable plans."],
    ["To initiate and sustain the set of projects that meets strategy.", "That is Portfolio Management."],
    ["To determine project status and direct corrective action.", "Tracking and steering progress is Project Assessment and Control."],
    ["To select the most beneficial course of action among alternatives.", "That is Decision Management."],
  ],
  a: 0,
  t: "Project Planning: produce and coordinate effective, workable plans.",
});

Q({
  id: "M02", d: "techmgmt", b: "remember",
  ref: "SEH5 Ch.2 — Technical Management Processes: Project Planning (SEMP)",
  s: "What is the Systems Engineering Management Plan (SEMP)?",
  o: [
    ["The controlled document that lists every system requirement together with its verification method.",
      "That's a requirements specification with a verification matrix, not the SEMP."],
    ["The top-level technical plan describing how SE will be conducted and managed on the project.",
      "Correct. The SEMP (or SE plan) explains the technical approach — processes, organization, reviews, tailoring — and how the technical effort is integrated and controlled."],
    ["The financial plan that allocates the project budget to each work package and control account.",
      "Budgets are part of project plans, but the SEMP focuses on the technical effort."],
    ["The organization's quality policy and objectives, which every project must comply with.",
      "Quality policy is organizational (Quality Management)."],
  ],
  a: 1,
  t: "The SEMP says how SE will be done on this project — the technical plan.",
});

Q({
  id: "M03", d: "techmgmt", b: "understand",
  ref: "SEH5 Ch.2 — Technical Management Processes: Project Planning (WBS)",
  s: "What is a Work Breakdown Structure (WBS) used for in planning?",
  o: [
    ["To describe the system's functions and the data flows between them, independent of technology.",
      "Functional behavior is captured in the functional/logical architecture, not the WBS."],
    ["To show the reporting lines and responsibilities of the people in the project organization.",
      "That is an organization breakdown structure/chart."],
    ["To break project scope into work packages that can be estimated, scheduled and tracked.",
      "Correct. The WBS, often aligned to the system breakdown (product structure), is the foundation for estimating, scheduling and cost tracking."],
    ["To list the project's risks with their likelihood, consequence and treatment owners.",
      "Risks are captured in the risk register."],
  ],
  a: 2,
  t: "WBS = the project scope broken into manageable, trackable work packages.",
});

Q({
  id: "M04", d: "techmgmt", b: "apply",
  ref: "SEH5 Ch.2 — Technical Management Processes: Project Planning",
  s: "At project start, a lead engineer defines the technical reviews, the life cycle model to use, roles and responsibilities, and the tailoring of processes. Which process is this?",
  o: [
    ["Project Assessment and Control", "That process checks progress against these plans; it doesn't create them."],
    ["Life Cycle Model Management", "That is organizational: it defines standard models. Selecting and tailoring for this project is Project Planning."],
    ["Decision Management", "Some decisions are made, but the activity overall is planning."],
    ["Project Planning", "Correct. Defining the project's approach, reviews, roles and tailoring are planning outputs (often captured in the SEMP)."],
  ],
  a: 3,
  t: "Deciding how this project will be run (reviews, model, roles, tailoring) → Project Planning.",
});

Q({
  id: "M05", d: "techmgmt", b: "understand",
  ref: "SEH5 Ch.2 — Technical Management Processes: Project Planning (plans are living)",
  s: "How should project plans be treated once the project is under way?",
  o: [
    ["As fixed commitments that are not changed, so that progress can be measured consistently.",
      "Plans that cannot change quickly become unrealistic; measurement baselines are updated through control, not frozen forever."],
    ["As living documents, refined as the project learns and deviations appear.",
      "Correct. Planning is iterative; plans are refined as progress is assessed and circumstances change."],
    ["As documents needed only to pass the first decision gate, after which the team self-organizes.",
      "Plans guide the whole project."],
    ["As optional when the team is experienced and has delivered similar systems before.",
      "Experienced teams still need coordinated plans; they may just be lighter."],
  ],
  a: 1,
  t: "Plans are living — refine them as you learn.",
});

/* ---- Project Assessment and Control (5) ---- */
Q({
  id: "M06", d: "techmgmt", b: "remember",
  ref: "SEH5 Ch.2 — Technical Management Processes: Project Assessment and Control",
  s: "What is the purpose of the Project Assessment and Control process?",
  o: [
    ["To determine project status against plans and direct execution to stay on track.",
      "Correct. It assesses whether plans are aligned and feasible, determines project, technical and process status, and directs corrective or preventive action."],
    ["To produce and coordinate effective and workable plans for the project.", "That is Project Planning."],
    ["To provide evidence that the system fulfils its intended use in operation.", "That is Validation."],
    ["To provide assurance that project processes comply with quality requirements.", "Process compliance assurance is Quality Assurance."],
  ],
  a: 0,
  t: "PA&C: measure status against the plan and steer (corrective action).",
});

Q({
  id: "M07", d: "techmgmt", b: "apply",
  ref: "SEH5 Ch.2 — Technical Management Processes: Project Assessment and Control",
  s: "A technical performance measure for system mass has been trending above its planned profile for three months and is now close to its threshold. What should happen next?",
  o: [
    ["Continue monitoring and act only if the threshold is actually exceeded at the next review.",
      "The point of trending is to act before a breach."],
    ["Re-baseline the planned profile and threshold so that the current trend falls within limits.",
      "Moving the goalposts hides the problem; thresholds change only through proper change control with justification."],
    ["Analyze the cause and initiate corrective action before the threshold is breached.",
      "Correct. PA&C uses measures like TPMs to detect deviations early and direct corrective or preventive action (e.g., design changes, reallocations, or a managed risk)."],
    ["Stop all development work until the next decision gate can review the mass problem.",
      "Stopping everything is disproportionate for a trend that can be managed."],
  ],
  a: 2,
  t: "Adverse TPM trend → analyse and act early (corrective action), don't wait for a breach.",
});

Q({
  id: "M08", d: "techmgmt", b: "understand",
  ref: "SEH5 Ch.2 — Technical Management Processes: Project Assessment and Control (earned value)",
  s: "In earned value management, a Cost Performance Index (CPI) of 0.85 indicates:",
  o: [
    ["The project is ahead of schedule by about 15%.", "CPI measures cost efficiency, not schedule. Schedule is indicated by SPI."],
    ["The work performed is costing more than planned.", "Correct. CPI = earned value ÷ actual cost. At 0.85 the project gets only 85 cents of planned work value per dollar spent — it's over budget."],
    ["The project has completed 85% of its planned work.", "Percent complete is a different measure."],
    ["The project is under budget by about 15%.", "Below 1.0 means over budget, not under."],
  ],
  a: 1,
  t: "CPI = EV/AC; SPI = EV/PV. Below 1.0 is bad (over cost / behind schedule).",
});

Q({
  id: "M09", d: "techmgmt", b: "understand",
  ref: "SEH5 Ch.2 — Technical Management Processes: Project Assessment and Control (technical reviews)",
  s: "What is the main purpose of technical reviews (e.g., a system requirements review or preliminary design review)?",
  o: [
    ["To assess technical maturity against criteria and inform whether to proceed.",
      "Correct. Reviews are event-based assessments of maturity and risk that feed decision gates and baselines."],
    ["To present progress to the customer in order to secure the next funding tranche.",
      "Funding may follow, but reviews are technical assessments, not sales events."],
    ["To provide the formal verification evidence that requirements have been met.",
      "Reviews assess readiness and maturity; they do not replace verification."],
    ["To identify which team members were responsible for defects found so far.",
      "Reviews should be constructive assessments, not blame sessions."],
  ],
  a: 0,
  t: "Technical reviews assess maturity against criteria to inform go/no-go decisions.",
});

Q({
  id: "M10", d: "techmgmt", b: "understand",
  ref: "SEH5 Ch.2 — Technical Management Processes: Project Assessment and Control",
  s: "Which output is most characteristic of Project Assessment and Control?",
  o: [
    ["Validation reports showing the system meets its intended use", "Validation produces evidence that the system meets its intended use."],
    ["Approved configuration baselines and change records", "Baselines are established under Configuration Management."],
    ["Status reports and corrective/preventive action requests", "Correct. PA&C reports status and directs actions to bring performance back in line with plans."],
    ["An architecture description with views and models", "That comes from System Architecture Definition."],
  ],
  a: 2,
  t: "PA&C outputs: status assessments and corrective/preventive actions.",
});

/* ---- Decision Management (4) ---- */
Q({
  id: "M11", d: "techmgmt", b: "remember",
  ref: "SEH5 Ch.2 — Technical Management Processes: Decision Management",
  s: "What is the purpose of the Decision Management process?",
  o: [
    ["To record decisions made by management so that they can be communicated to the team.",
      "Recording decisions is part of it, but the purpose is to structure the decision itself."],
    ["To objectively evaluate alternatives and select the most beneficial course of action.",
      "Correct. It provides a structured, analytical framework: frame the decision, set criteria, identify and evaluate alternatives, and record the rationale."],
    ["To identify, analyze, treat and monitor uncertainties that could affect objectives.",
      "That is Risk Management (although decisions and risk are related)."],
    ["To initiate, sustain and terminate projects in line with organizational strategy.",
      "That is Portfolio Management."],
  ],
  a: 1,
  t: "Decision Management = structured, objective selection among alternatives, with recorded rationale.",
});

Q({
  id: "M12", d: "techmgmt", b: "understand",
  ref: "SEH5 Ch.2 — Technical Management Processes: Decision Management (trade studies)",
  s: "When conducting a trade study, when should the evaluation criteria and their weights be established?",
  o: [
    ["After scoring the alternatives, so that the weights reflect what the scores revealed", "This allows bias: weights can be tuned to favour a preferred answer."],
    ["Only if the customer requests a formal trade study report as a deliverable", "Criteria are fundamental to any objective trade study."],
    ["Never — an experienced expert's overall judgment is more reliable than weights", "Expert judgment is useful but should be applied against explicit criteria."],
    ["Before evaluating alternatives, based on stakeholder needs and requirements", "Correct. Defining criteria and weights first keeps the evaluation objective and traceable to what stakeholders value."],
  ],
  a: 3,
  t: "Set criteria and weights before scoring alternatives — otherwise you're rationalizing, not deciding.",
});

Q({
  id: "M13", d: "techmgmt", b: "understand",
  ref: "SEH5 Ch.2 — Technical Management Processes: Decision Management (sensitivity analysis)",
  s: "Why is a sensitivity analysis performed at the end of a trade study?",
  o: [
    ["To check the preferred option stays preferred when weights or assumptions change.",
      "Correct. It tests the robustness of the decision; if small changes flip the result, the decision needs more scrutiny."],
    ["To determine how sensitive the system's sensors are to environmental conditions.",
      "Different meaning of 'sensitivity'."],
    ["To identify which stakeholder groups are most sensitive to the final decision.",
      "Stakeholder analysis matters, but that isn't sensitivity analysis."],
    ["To generate additional alternatives that were missed in the initial study.",
      "Sensitivity analysis examines robustness, not new options."],
  ],
  a: 0,
  t: "Sensitivity analysis checks if the winner stays the winner when assumptions shift.",
});

Q({
  id: "M14", d: "techmgmt", b: "apply",
  ref: "SEH5 Ch.2 — Technical Management Processes: Decision Management",
  s: "Why should the rationale for a significant technical decision be recorded?",
  o: [
    ["Because every regulator requires written decision records for certification.",
      "Some regulations do, but the reason in SE is broader."],
    ["So it can be revisited if assumptions change, and not re-argued from scratch.",
      "Correct. Decision rationale supports traceability, change impact analysis and organizational learning."],
    ["So the decision is locked and cannot be reopened later in the project.",
      "Recording rationale makes it easier to revisit decisions properly, not to lock them."],
    ["So responsibility can be assigned to individuals if the outcome is poor.",
      "Blame is not the purpose."],
  ],
  a: 1,
  t: "Record the decision AND why — so it can be revisited intelligently.",
});

/* ---- Risk Management (6) ---- */
Q({
  id: "M15", d: "techmgmt", b: "remember",
  ref: "SEH5 Ch.2 — Technical Management Processes: Risk Management",
  s: "What is the purpose of the Risk Management process?",
  o: [
    ["To eliminate all risks from the project before the Development stage begins.", "Eliminating all risk is impossible and uneconomic; the aim is to manage it."],
    ["To identify, analyze, treat and monitor risks continually.", "Correct. Risk management is continuous across the life cycle and addresses both threats and opportunities."],
    ["To transfer project risks to suppliers and insurers through contract terms.", "Transfer is one treatment option, not the purpose."],
    ["To track and resolve problems that have already occurred on the project.", "Those are issues; risk management looks at uncertain future events."],
  ],
  a: 1,
  t: "Risk Management: identify, analyze, treat, monitor — continually.",
});

Q({
  id: "M16", d: "techmgmt", b: "understand",
  ref: "SEH5 Ch.2 — Technical Management Processes: Risk Management (risk vs issue)",
  s: "What distinguishes a risk from an issue?",
  o: [
    ["A risk is always technical, whereas an issue is always a cost or schedule matter.", "Both can be technical, cost, schedule or programmatic."],
    ["A risk has already occurred, whereas an issue is something that might occur.", "This reverses the definitions."],
    ["A risk is an uncertain future event; an issue is a problem that has already occurred.",
      "Correct. Risks have a likelihood below certainty; issues are certain (they are happening) and must be dealt with."],
    ["A risk is owned by the project manager, whereas an issue is owned by the customer.", "Ownership is assigned case by case; it's not the distinction."],
  ],
  a: 2,
  t: "Risk = might happen (uncertain). Issue = has happened (certain).",
});

Q({
  id: "M17", d: "techmgmt", b: "remember",
  ref: "SEH5 Ch.2 — Technical Management Processes: Risk Management (risk analysis)",
  s: "Risk exposure (level of risk) is typically characterized by combining which two factors?",
  o: [
    ["Likelihood of occurrence and consequence if it occurs", "Correct. These two dimensions are often plotted on a risk matrix to prioritize risks."],
    ["Cost impact and schedule impact of the event", "Cost and schedule are types of consequence, not the two defining dimensions."],
    ["The risk owner and the date by which it must be closed", "Those are management attributes of a risk record, not how exposure is assessed."],
    ["System complexity and the size of the development team", "These may be sources of risk but don't define exposure."],
  ],
  a: 0,
  t: "Risk level = likelihood × consequence (often shown on a matrix).",
});

Q({
  id: "M18", d: "techmgmt", b: "apply",
  ref: "SEH5 Ch.2 — Technical Management Processes: Risk Management (treatment options)",
  s: "A project buys a warranty and uses a fixed-price subcontract so that a supplier bears the cost if a component fails qualification. Which risk treatment is this?",
  o: [
    ["Avoidance", "Avoidance changes the plan so the risk no longer applies (e.g., choosing a different, proven component)."],
    ["Acceptance", "Acceptance means knowingly tolerating the risk, maybe with a reserve."],
    ["Mitigation (control)", "Mitigation reduces likelihood or consequence (e.g., extra prototyping); this example shifts who bears the impact."],
    ["Transfer (sharing)", "Correct. The consequence is moved to another party via contract, warranty or insurance."],
  ],
  a: 3,
  t: "Treatments: avoid, mitigate/reduce, transfer/share, accept (and monitor). Contracts/insurance = transfer.",
});

Q({
  id: "M19", d: "techmgmt", b: "understand",
  ref: "SEH5 Ch.2 — Technical Management Processes: Risk Management (opportunities)",
  s: "According to the handbook, does risk management deal with opportunities as well as threats?",
  o: [
    ["No — opportunities are handled by business development, not by project risk management.",
      "The handbook includes opportunities within the scope of risk and uncertainty management."],
    ["Yes — uncertainty can have positive effects, which should be identified and pursued.",
      "Correct. Modern risk management (consistent with ISO standards) treats uncertainty with positive or negative effects on objectives."],
    ["Only when the project is ahead of schedule and under budget, so there is slack to exploit.",
      "Opportunity identification is not conditional on schedule status."],
    ["Only on agile projects, since plan-driven projects fix scope and cannot exploit upside.",
      "It applies to any project."],
  ],
  a: 1,
  t: "Risk management covers upside (opportunity) as well as downside (threat).",
});

Q({
  id: "M20", d: "techmgmt", b: "apply",
  ref: "SEH5 Ch.2 — Technical Management Processes: Risk Management (avoidance)",
  s: "A team decides to use a proven, flight-qualified processor instead of a new, unqualified one to eliminate a qualification risk entirely. Which risk treatment is this?",
  o: [
    ["Avoidance", "Correct. Changing the approach so the risk no longer exists is avoidance."],
    ["Transfer", "Nothing is moved to another party."],
    ["Acceptance", "They are not tolerating the risk; they removed it."],
    ["Mitigation", "Mitigation reduces likelihood or impact while keeping the risky approach (e.g., extra testing of the new processor); here the risky approach is dropped."],
  ],
  a: 0,
  t: "Avoid = change the plan so the risk doesn't apply.",
});

/* ---- Configuration Management (6) ---- */
Q({
  id: "M21", d: "techmgmt", b: "remember",
  ref: "SEH5 Ch.2 — Technical Management Processes: Configuration Management",
  s: "What is the purpose of the Configuration Management process?",
  o: [
    ["To generate, retain and disseminate project information to designated stakeholders.", "That is Information Management."],
    ["To manage and control system elements and configurations over the life cycle.",
      "Correct. CM keeps the product consistent with its configuration information — 'as-defined', 'as-built' and 'as-maintained' — and controls change."],
    ["To set up the tools and IT environments that projects use for engineering work.", "That is Infrastructure Management."],
    ["To select the most beneficial design alternative using defined criteria.", "That is Decision Management."],
  ],
  a: 1,
  t: "CM keeps the product and its configuration information consistent and controlled over life.",
});

Q({
  id: "M22", d: "techmgmt", b: "remember",
  ref: "SEH5 Ch.2 — Technical Management Processes: Configuration Management (activities)",
  s: "Which set lists the main activities of configuration management?",
  o: [
    ["Planning, design, implementation, integration and test", "These are general engineering activities, not CM activities."],
    ["Identification, analysis, treatment, monitoring and reporting", "That is the risk management cycle."],
    ["Planning, identification, change control, status accounting and audits", "Correct. These are the classic CM functions, with release control also included in ISO/IEC/IEEE 15288."],
    ["Elicitation, analysis, specification, validation and management", "These relate to requirements work."],
  ],
  a: 2,
  t: "CM = plan, identify, control changes, account for status, audit.",
});

Q({
  id: "M23", d: "techmgmt", b: "remember",
  ref: "SEH5 Ch.2 — Technical Management Processes: Configuration Management (baselines)",
  s: "What is a baseline?",
  o: [
    ["An agreed description of a product at a point in time, changed only by formal change control.",
      "Correct. Once baselined, a configuration serves as the reference for defining and controlling change."],
    ["The minimum acceptable performance value that a requirement allows before it is failed.",
      "That's a threshold value, not a baseline."],
    ["The first engineering prototype, kept as the reference article for all later production units.",
      "A prototype is an artifact; a baseline is an agreed configuration description."],
    ["The initial cost estimate approved at project start, against which variances are measured.",
      "Cost baselines exist in project management, but the CM meaning is a formally agreed configuration."],
  ],
  a: 0,
  t: "Baseline = agreed reference configuration; changes only via formal change control.",
});

Q({
  id: "M24", d: "techmgmt", b: "understand",
  ref: "SEH5 Ch.2 — Technical Management Processes: Configuration Management (status accounting)",
  s: "What does configuration status accounting provide?",
  o: [
    ["The cost accounts showing how much has been spent on each configuration item.", "Different meaning of 'accounting'."],
    ["The authority to approve or reject proposed changes to baselined items.", "Approval is done by the change control authority (e.g., a configuration control board)."],
    ["A physical examination confirming the as-built item matches its documentation.", "That is a physical configuration audit."],
    ["Records of current baselines, change requests and the status of approved changes.",
      "Correct. It answers 'what is the current configuration and what changes are pending or done?'"],
  ],
  a: 3,
  t: "Status accounting = the records: what's baselined, what changed, what's pending.",
});

Q({
  id: "M25", d: "techmgmt", b: "understand",
  ref: "SEH5 Ch.2 — Technical Management Processes: Configuration Management (audits)",
  s: "What is the difference between a Functional Configuration Audit (FCA) and a Physical Configuration Audit (PCA)?",
  o: [
    ["FCA checks the documents are correctly formatted; PCA checks the item is correctly labelled.",
      "They check substance, not formatting or labels."],
    ["FCA confirms required performance was achieved; PCA confirms the as-built item matches its documentation.",
      "Correct. FCA uses verification results to show the item performs as specified; PCA shows the physical product matches its design documentation."],
    ["FCA is performed on hardware items, while PCA is performed on software items only.",
      "Both can apply to hardware and software."],
    ["FCA is performed by the customer, while PCA is always performed by the supplier.",
      "Either party can participate in either audit."],
  ],
  a: 1,
  t: "FCA: performs as required? PCA: built as documented?",
});

Q({
  id: "M26", d: "techmgmt", b: "apply",
  ref: "SEH5 Ch.2 — Technical Management Processes: Configuration Management (change control)",
  s: "An engineer finds a better connector and wants to use it on a baselined design. What is the correct next step?",
  o: [
    ["Use the new connector immediately and update the parts list, since it is clearly an improvement.",
      "Uncontrolled changes break consistency between documents, interfaces and the product."],
    ["Keep the current connector and raise the idea again once production has started.",
      "Delaying increases the cost of change."],
    ["Raise a change request so its impact can be assessed and a decision made.",
      "Correct. Changes to baselined items go through formal change control: impact on cost, schedule, interfaces and other items is assessed, then the change authority approves or rejects it."],
    ["Update the drawing directly and inform the other teams at the next design review.",
      "This defeats configuration control and risks interface failures in the meantime."],
  ],
  a: 2,
  t: "Baselined item? Change request → impact analysis → approval → implement → record.",
});

/* ---- Information Management (3) ---- */
Q({
  id: "M27", d: "techmgmt", b: "remember",
  ref: "SEH5 Ch.2 — Technical Management Processes: Information Management",
  s: "What is the purpose of the Information Management process?",
  o: [
    ["To generate, obtain, retain, disseminate and dispose of information for designated stakeholders.",
      "Correct. It ensures the right information gets to the right people at the right time, with appropriate integrity and security."],
    ["To create the capability and assets that let the organization reapply knowledge.",
      "That is Knowledge Management."],
    ["To collect, analyze and report objective data about processes and products.",
      "That is Measurement."],
    ["To provide and maintain the IT infrastructure and services used by projects.",
      "That is Infrastructure Management."],
  ],
  a: 0,
  t: "Information Management: right information, right people, right time — securely, through its whole life.",
});

Q({
  id: "M28", d: "techmgmt", b: "apply",
  ref: "SEH5 Ch.2 — Technical Management Processes: Information Management",
  s: "A project defines which technical data must be kept, in what formats, who may access it, how long it's retained and how export-controlled data is protected. Which process is this?",
  o: [
    ["Configuration Management", "CM controls configuration items and baselines; the wider handling, access, retention and dissemination of information is Information Management."],
    ["Information Management", "Correct. Planning information items, access rights, retention and security is Information Management."],
    ["Knowledge Management", "Knowledge Management is about organizational reuse of knowledge."],
    ["Quality Assurance", "QA may check that information is handled per plan, but defining it is Information Management."],
  ],
  a: 1,
  t: "Formats, access, retention, security of project data → Information Management.",
});

Q({
  id: "M29", d: "techmgmt", b: "understand",
  ref: "SEH5 Ch.2 — Technical Management Processes: Information Management",
  s: "Why does information management matter especially in long-lived systems?",
  o: [
    ["Because documentation is the main deliverable of SE, and long programs produce more of it.",
      "Documentation matters, but SE's deliverable is a system that meets needs."],
    ["Because long-lived systems no longer need configuration management once they are in service.",
      "They need it even more."],
    ["Because formats age and people leave, yet information must stay usable for decades.",
      "Correct. Retention, format migration and accessibility are key concerns in information management for operation, support and disposal."],
    ["Because regulations require all system information to be retained on paper.",
      "Not generally true, and not the SE reasoning."],
  ],
  a: 2,
  t: "Information must outlive tools, formats and people — plan for it.",
});

/* ---- Measurement (4) ---- */
Q({
  id: "M30", d: "techmgmt", b: "remember",
  ref: "SEH5 Ch.2 — Technical Management Processes: Measurement",
  s: "What is the purpose of the Measurement process?",
  o: [
    ["To calibrate the project's test and measurement equipment against traceable standards.", "Calibration is a metrology task, not the SE Measurement process."],
    ["To provide objective evidence that each element fulfils its specified requirements.", "That's Verification."],
    ["To generate, retain and disseminate project information to the right stakeholders.", "That's Information Management."],
    ["To collect, analyze and report objective data to support management and show quality.",
      "Correct. Measurement provides the objective data that decision-making and control rely on, and demonstrates the quality of products, services and processes."],
  ],
  a: 3,
  t: "Measurement = objective data to support decisions and show quality.",
});

Q({
  id: "M31", d: "techmgmt", b: "understand",
  ref: "SEH5 Ch.2 — Technical Management Processes: Measurement (MOE, MOP, TPM)",
  s: "Which statement correctly describes a Measure of Effectiveness (MOE)?",
  o: [
    ["An operational measure of mission success from the user's view, largely solution-independent.",
      "Correct. MOEs express how well the system achieves its purpose in its intended environment (e.g., 'targets detected per hour')."],
    ["A critical design parameter tracked over time by engineers against a planned profile.",
      "That describes a TPM."],
    ["A ratio of earned value to actual cost showing how efficiently the budget is used.",
      "That's a cost performance measure like CPI."],
    ["A physical or functional attribute of the system measured under specified conditions.",
      "That describes a MOP."],
  ],
  a: 0,
  t: "MOE = mission success from the user's view; MOP = system performance attribute; TPM = tracked critical parameter.",
});

Q({
  id: "M32", d: "techmgmt", b: "understand",
  ref: "SEH5 Ch.2 — Technical Management Processes: Measurement (TPMs)",
  s: "What characterizes a Technical Performance Measure (TPM)?",
  o: [
    ["It is a survey-based score of how satisfied users are with the delivered system.", "That's not a technical performance attribute of the system."],
    ["It is a critical parameter tracked over time against a planned profile and thresholds.",
      "Correct. TPMs (e.g., mass, power, latency) give early warning of technical risk as the design matures."],
    ["It is measured once, during final system verification, to confirm compliance.", "TPMs are tracked throughout development, not just at the end."],
    ["It is a mission-level measure of how well the system achieves its operational purpose.", "That describes an MOE; TPMs are detailed design-level parameters."],
  ],
  a: 1,
  t: "TPM = key parameter tracked over time against a planned profile and thresholds.",
});

Q({
  id: "M33", d: "techmgmt", b: "apply",
  ref: "SEH5 Ch.2 — Technical Management Processes: Measurement (MOE vs MOP)",
  s: "For an emergency response system, 'percentage of callers reached by a responder within 8 minutes' is best classified as:",
  o: [
    ["A Measure of Performance", "A MOP would be a system attribute like 'dispatch message latency ≤ 2 s'."],
    ["A Technical Performance Measure", "TPMs are detailed parameters tracked during development (e.g., server response time)."],
    ["A Measure of Effectiveness", "Correct. It expresses mission outcome from the stakeholder's viewpoint, independent of how the system achieves it."],
    ["A Key Performance Parameter threshold", "KPPs are a small set of critical performance attributes of the system; this statement describes the mission outcome itself."],
  ],
  a: 2,
  t: "Mission outcome from the user's perspective → MOE.",
});

/* ---- Quality Assurance (3) ---- */
Q({
  id: "M34", d: "techmgmt", b: "remember",
  ref: "SEH5 Ch.2 — Technical Management Processes: Quality Assurance",
  s: "What is the purpose of the Quality Assurance process?",
  o: [
    ["To provide evidence that the system meets stakeholders' intended use in operation.", "That is Validation."],
    ["To establish the organization's quality policies, objectives and customer-satisfaction goals.", "That is Quality Management (organizational)."],
    ["To ensure the organization's quality management process is applied effectively to the project.",
      "Correct. QA provides objective, independent evaluation that project processes and products meet quality requirements."],
    ["To test every component for defects before it is released to integration.", "Testing is a verification method. QA evaluates processes and products more broadly."],
  ],
  a: 2,
  t: "QA = objective assurance, within the project, that processes and products meet quality requirements.",
});

Q({
  id: "M35", d: "techmgmt", b: "understand",
  ref: "SEH5 Ch.2 — Technical Management Processes: Quality Assurance (independence)",
  s: "Why should quality assurance evaluations be objective and independent of the people doing the work?",
  o: [
    ["So that QA staff can overrule engineering design decisions they disagree with.",
      "QA provides assurance and raises nonconformances; it does not take over engineering authority."],
    ["To avoid conflicts of interest and give management trustworthy findings.",
      "Correct. Independence gives credibility to QA findings and helps ensure problems are escalated."],
    ["So that QA reports can be kept confidential from the engineering team.",
      "Findings are shared so issues can be corrected."],
    ["So that small projects can skip QA and rely on an external audit instead.",
      "Independence is about objectivity; QA is tailored, not skipped."],
  ],
  a: 1,
  t: "QA needs objectivity (independence) to be credible.",
});

Q({
  id: "M36", d: "techmgmt", b: "remember",
  ref: "SEH5 Ch.2 — Technical Management Processes (list)",
  s: "Which of the following is NOT one of the eight technical management processes?",
  o: [
    ["Measurement", "Measurement is a technical management process."],
    ["Configuration Management", "Configuration Management is a technical management process."],
    ["Decision Management", "Decision Management is a technical management process."],
    ["Portfolio Management", "Correct — this one is NOT. Portfolio Management is an organizational project-enabling process. The eight are Project Planning, Project Assessment and Control, Decision Management, Risk Management, Configuration Management, Information Management, Measurement and Quality Assurance."],
  ],
  a: 3,
  t: "Tech mgmt (8): Planning, Assessment & Control, Decision, Risk, Configuration, Information, Measurement, QA.",
});
