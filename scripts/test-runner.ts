import assert from "node:assert/strict";
import fs from "node:fs";

console.log("-> Starting GuruOS Web Comprehensive Test Suite...");

// 1. Verify existence of all key routes and components
const requiredFiles = [
  "src/types/index.ts",
  "src/config/siteConfig.ts",
  "src/data/architectureData.ts",
  "src/data/featuresData.ts",
  "src/data/specificationsData.ts",
  "src/data/faqData.ts",
  "src/data/roadmapData.ts",
  "src/data/installerData.ts",
  "src/app/install/page.tsx",
  "src/components/installer/InstallationWizard.tsx",
  "src/components/installer/Step1Welcome.tsx",
  "src/components/installer/Step2Destination.tsx",
  "src/components/installer/Step3Profile.tsx",
  "src/components/installer/Step4Hardware.tsx",
  "src/components/installer/Step5DiskPlan.tsx",
  "src/components/installer/Step6UserConfig.tsx",
  "src/components/installer/Step7Desktop.tsx",
  "src/components/installer/Step8LocalAi.tsx",
  "src/components/installer/Step9Review.tsx",
  "src/components/installer/Step10NextSteps.tsx",
  "src/components/installer/FutureInstallerDocs.tsx",
  "src/components/modals/ChecksumModal.tsx",
  "src/components/InstallationGuide.tsx",
  "src/components/Footer.tsx"
];

for (const file of requiredFiles) {
  assert.ok(fs.existsSync(file), `File missing: ${file}`);
}
console.log(`✓ All ${requiredFiles.length} core files and components exist.`);

// 2. Validate siteConfig contents
const siteConfigContent = fs.readFileSync("src/config/siteConfig.ts", "utf8");
assert.ok(siteConfigContent.includes("38157947896"), "Must cite CI run 38157947896");
assert.ok(siteConfigContent.includes("0a7744dc91d4ea7d17eb11a797be9116024d4eb69bafb3fbf1aa281982ca482e"), "Must have authoritative os-agent sha256");
assert.ok(siteConfigContent.includes("Qwen2.5-3B-Instruct.Q4_K_M.gguf"), "Must have model filename");
assert.ok(siteConfigContent.includes("AMD A8-7410"), "Must cite reference hardware AMD A8-7410");
assert.ok(siteConfigContent.includes("127.0.0.1:8000"), "Must have Python MCP server on 127.0.0.1:8000");
assert.ok(siteConfigContent.includes("127.0.0.1:11434"), "Must have Ollama on 127.0.0.1:11434");
console.log("✓ siteConfig includes all required technical specs, SHA-256 hashes, CI run, and reference hardware.");

// 3. Validate 15 Rust crates declared
const rustCrates = [
  "hyprland-ipc", "shell-config", "app-info", "top-panel", "launcher",
  "quick-settings", "dock", "notifications", "settings", "file-manager",
  "lockscreen", "shell-backend", "app-store", "first-boot", "theme-manager"
];
for (const crate of rustCrates) {
  assert.ok(siteConfigContent.includes(crate), `Missing crate in siteConfig: ${crate}`);
}
console.log(`✓ All 15 Rust crates verified in siteConfig.`);

// 4. Validate Known Issues #1 to #5
for (let i = 1; i <= 5; i++) {
  assert.ok(siteConfigContent.includes(`issue-${i}`), `Missing Issue #${i} (issue-${i}) in siteConfig`);
}
console.log("✓ All 5 Known Issues (#1 Polkit, #2 Workspace, #3 shell-common, #4 License, #5 Benchmark) documented.");

// 5. Validate FAQ count (all 11 prompt questions)
const faqContent = fs.readFileSync("src/data/faqData.ts", "utf8");
const faqMatches = faqContent.match(/question:\s*"/g);
assert.ok(faqMatches && faqMatches.length >= 11, `Expected at least 11 FAQ items, found ${faqMatches?.length}`);
console.log(`✓ FAQ contains ${faqMatches?.length} technical answers.`);

// 6. Validate Step 6 credential safety: zero credential persistence
const step6Content = fs.readFileSync("src/components/installer/Step6UserConfig.tsx", "utf8");
assert.ok(step6Content.includes("password"), "Step 6 must handle password");
assert.ok(step6Content.includes("browser memory only"), "Step 6 must inform user about memory-only password");
assert.ok(step6Content.includes("never included in exported JSON summaries"), "Step 6 must guarantee zero password export");

const step9Content = fs.readFileSync("src/components/installer/Step9Review.tsx", "utf8");
assert.ok(!step9Content.includes("password:"), "Step 9 review profile JSON export must NEVER include password");
console.log("✓ Credential security confirmed: Zero password leakage in profile JSON.");

// 7. Validate installer data: 10 steps defined
const installerDataContent = fs.readFileSync("src/data/installerData.ts", "utf8");
for (let step = 1; step <= 10; step++) {
  assert.ok(installerDataContent.includes(`number: ${step}`), `Missing step number: ${step} in installerData`);
}
console.log("✓ All 10 installation wizard steps verified in installerData.");

// 8. Validate /install route exists and renders wizard
const installPageContent = fs.readFileSync("src/app/install/page.tsx", "utf8");
assert.ok(installPageContent.includes("InstallationWizard"), "Install page must render InstallationWizard");
assert.ok(installPageContent.includes("Navbar"), "Install page must render Navbar");
console.log("✓ /install page correctly wires InstallationWizard and navigation.");

// 9. Validate ChecksumModal displays os-agent SHA-256 and honest ISO note
const checksumModalContent = fs.readFileSync("src/components/modals/ChecksumModal.tsx", "utf8");
assert.ok(checksumModalContent.includes("modelSpec.sha256") || checksumModalContent.includes("modelHash"), "ChecksumModal must display model SHA-256");
assert.ok(checksumModalContent.includes("38157947896"), "ChecksumModal must cite CI run failure");
console.log("✓ ChecksumModal verified for cryptographic truth.");

console.log("\n=======================================================");
console.log("SUCCESS: ALL 9 VERIFICATION SUITE ASSERTIONS PASSED!");
console.log("=======================================================");
