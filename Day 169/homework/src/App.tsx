import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertTitle } from "@/components/ui/alert";

const mockStatus = {
  compromised: true,
  riskScore: 70,
  nodes: ["API Gateway", "Kubernetes", "Vault", "ML Engine", "SIEM"]
};

export default function GamifiedUI() {
  const [risk, setRisk] = useState(mockStatus.riskScore);
  const [compromised, setCompromised] = useState(mockStatus.compromised);
  const [selectedNode, setSelectedNode] = useState(null);

  return (
    <div className="grid grid-cols-4 gap-4 p-6 min-h-screen bg-gray-900 text-white">
      <Card className="col-span-1 bg-gray-800">
        <CardContent>
          <h2 className="text-xl font-bold mb-4">Node Map UI</h2>
          <ul className="space-y-2">
            {mockStatus.nodes.map((node) => (
              <li key={node}>
                <Button variant="secondary" onClick={() => setSelectedNode(node)}>
                  {node}
                </Button>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card className="col-span-1 bg-gray-800">
        <CardContent>
          <h2 className="text-xl font-bold mb-4">Risk Meter</h2>
          <Progress value={risk} className="mb-2" />
          <p>{risk} / 100 Risk</p>
        </CardContent>
      </Card>

      <Card className="col-span-2 bg-gray-800">
        <CardContent>
          <h2 className="text-xl font-bold mb-4">{selectedNode || "Select a Node"}</h2>
          {selectedNode ? (
            <div>
              <p>Displaying metrics, logs, traces, and security posture for <strong>{selectedNode}</strong>.</p>
              <Button variant="outline" className="mt-4">View in Grafana</Button>
            </div>
          ) : (
            <p>Please select a node to inspect its details.</p>
          )}

          {compromised && (
            <Alert variant="destructive" className="mt-6">
              <AlertTitle>⚠️ Compromised Status Detected</AlertTitle>
              <p>This node may be involved in an active breach or anomaly.</p>
            </Alert>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
