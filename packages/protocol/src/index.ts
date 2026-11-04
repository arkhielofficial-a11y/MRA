export const PROTOCOL_VERSION = "1" as const;

export const CLIENT_EVENT_TYPES = [
  "connection.hello",
  "presence.heartbeat",
  "match.event",
] as const;

export const SERVER_EVENT_TYPES = ["connection.ack"] as const;

export type ClientEventType = (typeof CLIENT_EVENT_TYPES)[number];
export type ServerEventType = (typeof SERVER_EVENT_TYPES)[number];
export type ProtocolEventType = ClientEventType | ServerEventType;

export interface ProtocolEnvelope<TPayload = unknown> {
  protocolVersion: typeof PROTOCOL_VERSION;
  eventId: string;
  type: ProtocolEventType;
  sentAt: string;
  requestId?: string;
  matchId?: string;
  payload: TPayload;
}

export interface HealthResponse {
  status: "ok";
  service: "mra-api";
  protocolVersion: typeof PROTOCOL_VERSION;
}
