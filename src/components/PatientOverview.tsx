import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { calculateStayDuration } from "@/lib/utils";
import type { PatientState } from "@/types/patient";
import { useSelector } from "react-redux";

export const PatientOverview: React.FC = () => {
    const { profile } = useSelector(
        (state: { patient: PatientState }) => state.patient
    );

    return (
        <Card className="w-full">
            <CardHeader className="-mt-2">
                <CardTitle className="text-xl font-semibold text-gray-800">
                    Patient Overview
                </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                    {/* <Avatar className="h-16 w-16">
                        <AvatarImage
                            src={profile.profilePic}
                            alt={`${profile.name}'s profile`}
                        />
                        <AvatarFallback>
                            {profile.name.charAt(0)}
                        </AvatarFallback>
                    </Avatar> */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full text-sm text-gray-700">
                        <div className="space-y-2">
                            <p>
                                <span className="font-medium">Name:</span>{" "}
                                {profile.name}
                            </p>
                            <p>
                                <span className="font-medium">Age:</span>{" "}
                                {profile.age}
                            </p>
                            <p>
                                <span className="font-medium">Gender:</span>{" "}
                                {profile.gender}
                            </p>
                            <p>
                                <span className="font-medium">Patient ID:</span>{" "}
                                {profile.patientId}
                            </p>
                        </div>
                        <div className="space-y-2">
                            <p>
                                <span className="font-medium">Admit Date:</span>{" "}
                                {new Date(profile.admitDate).toLocaleString()}
                            </p>
                            <p>
                                <span className="font-medium">
                                    Discharge Date:
                                </span>{" "}
                                {new Date(
                                    profile.dischargeDate
                                ).toLocaleString()}
                            </p>
                            <p>
                                <span className="font-medium">
                                    Duration of Stay:
                                </span>{" "}
                                {calculateStayDuration(
                                    profile.admitDate,
                                    profile.dischargeDate
                                )}
                            </p>
                            <p>
                                <span className="font-medium">Status:</span>{" "}
                                {profile.status}
                            </p>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};
