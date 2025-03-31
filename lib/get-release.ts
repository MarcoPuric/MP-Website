// lib/get-release.ts

export async function getReleaseVersion(): Promise<string> {
    try {
      const res = await fetch("/release.txt");
      const text = await res.text();
      const [versionLine] = text.split("\n");
      return versionLine || "Unbekannte Version";
    } catch (err) {
      console.error("Fehler beim Laden der Release-Version:", err);
      return "Version nicht verfügbar";
    }
  }
  