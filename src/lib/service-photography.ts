import equipment from "@/assets/equipment.jpg";
import support from "@/assets/collabio-support.jpg";
import recruiting from "@/assets/collabio-recruiting.jpg";
import assetLogisticsHome from "@/assets/asset-logistics-home.jpg";
import workforceHome from "@/assets/workforce-home.jpg";
import operationsHome from "@/assets/business-operations-home.jpg";
import equipmentDetail from "@/assets/equipment-detail.jpg";
import supportDetail from "@/assets/remote-support-detail.jpg";
import logisticsDetail from "@/assets/asset-logistics-detail.jpg";
import recruitingDetail from "@/assets/recruiting-detail.jpg";
import workforceDetail from "@/assets/workforce-detail.jpg";
import operationsDetail from "@/assets/business-operations-detail.jpg";

type Photograph = { src: string; alt: string };
type ServicePhotography = { card: Photograph; detail: Photograph };

export const servicePhotography: Record<string, ServicePhotography> = {
  "it-equipment-device-support": {
    card: { src: equipment, alt: "Technology equipment organized for client-approved handling" },
    detail: { src: equipmentDetail, alt: "Technician documenting closed laptops in an equipment receiving area" },
  },
  "remote-technology-support": {
    card: { src: support, alt: "Professional technology support work environment" },
    detail: { src: supportDetail, alt: "Headset-wearing technician coordinating authorized remote support" },
  },
  "it-asset-recovery-logistics": {
    card: { src: assetLogisticsHome, alt: "Closed laptops, protective packaging and equipment checklist" },
    detail: { src: logisticsDetail, alt: "Logistics coordinator documenting equipment beside shipping boxes" },
  },
  "recruiting-talent-solutions": {
    card: { src: recruiting, alt: "Professional recruiting work environment" },
    detail: { src: recruitingDetail, alt: "Recruiting professionals interviewing a candidate" },
  },
  "workforce-professional-support": {
    card: { src: workforceHome, alt: "Advisor and professional reviewing onboarding paperwork" },
    detail: { src: workforceDetail, alt: "Professionals reviewing career profiles together" },
  },
  "business-operations-support": {
    card: { src: operationsHome, alt: "Operations coordinators organizing business documentation" },
    detail: { src: operationsDetail, alt: "Two operations professionals reviewing a workflow plan" },
  },
};