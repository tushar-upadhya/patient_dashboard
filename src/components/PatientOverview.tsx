import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { calculateStayDuration } from "@/lib/utils";
import type { PatientState } from "@/types/patient";
import { useSelector } from "react-redux";

const formatDate = (date: string) =>
    new Date(date).toLocaleString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    });

const PatientOverview: React.FC = () => {
    const { profile } = useSelector(
        (state: { patient: PatientState }) => state.patient
    );

    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle className="text-lg text-muted-foreground">
                    Patient Overview
                </CardTitle>
            </CardHeader>
            <CardContent className="px-4 py-4 sm:px-6 sm:py-4">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full">
                    {/* Optional Avatar */}
                    {/* <Avatar className="h-16 w-16">
            <AvatarImage src={profile.profilePic} alt={`${profile.name}'s profile`} />
            <AvatarFallback>{profile.name?.charAt(0)}</AvatarFallback>
          </Avatar> */}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full text-sm text-gray-800">
                        <div className="space-y-1.5">
                            <p>
                                <span className="font-medium">Name:</span>{" "}
                                <span className="text-muted-foreground">
                                    {profile.name}
                                </span>
                            </p>
                            <p>
                                <span className="font-medium">Age:</span>{" "}
                                <span className="text-muted-foreground">
                                    {profile.age}
                                </span>
                            </p>
                            <p>
                                <span className="font-medium">Gender:</span>{" "}
                                <span className="text-muted-foreground capitalize">
                                    {profile.gender}
                                </span>
                            </p>
                            <p>
                                <span className="font-medium">Patient ID:</span>{" "}
                                <span className="text-muted-foreground">
                                    {profile.patientId}
                                </span>
                            </p>
                        </div>
                        <div className="space-y-1.5">
                            <p>
                                <span className="font-medium">Admit Date:</span>{" "}
                                <span className="text-muted-foreground">
                                    {formatDate(profile.admitDate)}
                                </span>
                            </p>
                            <p>
                                <span className="font-medium">
                                    Discharge Date:
                                </span>{" "}
                                <span className="text-muted-foreground">
                                    {profile.dischargeDate
                                        ? formatDate(profile.dischargeDate)
                                        : "N/A"}
                                </span>
                            </p>
                            <p>
                                <span className="font-medium">
                                    Duration of Stay:
                                </span>{" "}
                                <span className="text-muted-foreground">
                                    {calculateStayDuration(
                                        profile.admitDate,
                                        profile.dischargeDate
                                    )}
                                </span>
                            </p>
                            <p>
                                <span className="font-medium">Status:</span>{" "}
                                <span className="text-muted-foreground capitalize">
                                    {profile.status}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default PatientOverview;
