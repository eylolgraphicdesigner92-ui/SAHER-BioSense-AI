// ============================================
// 🌲 SAHER BioSense AI
// Complete JavaScript
// ============================================


// ============================================
// 1. بيانات البيئة التجريبية
// ============================================

let environmentData = {

    temperature: 38,

    humidity: 18,

    soilMoisture: 12,

    windSpeed: 25,

    sensors: 24

};


// ============================================
// 2. حساب خطر الحريق
// ============================================

function calculateRisk(data) {

    let risk = 0;


    // 🌡️ الحرارة

    if (data.temperature >= 40) {

        risk += 35;

    } else if (data.temperature >= 35) {

        risk += 30;

    } else if (data.temperature >= 30) {

        risk += 20;

    } else {

        risk += 10;

    }


    // 💧 رطوبة الهواء

    if (data.humidity <= 15) {

        risk += 35;

    } else if (data.humidity <= 25) {

        risk += 30;

    } else if (data.humidity <= 40) {

        risk += 20;

    } else {

        risk += 10;

    }


    // 🌱 رطوبة التربة

    if (data.soilMoisture <= 10) {

        risk += 30;

    } else if (data.soilMoisture <= 20) {

        risk += 25;

    } else if (data.soilMoisture <= 35) {

        risk += 15;

    } else {

        risk += 5;

    }


    // 💨 الرياح

    if (data.windSpeed >= 35) {

        risk += 20;

    } else if (data.windSpeed >= 25) {

        risk += 15;

    } else if (data.windSpeed >= 15) {

        risk += 10;

    } else {

        risk += 5;

    }


    return Math.min(risk, 100);
}


// ============================================
// 3. تحديد مستوى الخطر
// ============================================

function getRiskLevel(risk) {

    if (risk >= 75) {

        return "🔴 حرج";

    }

    if (risk >= 50) {

        return "🟠 مرتفع";

    }

    if (risk >= 25) {

        return "🟡 متوسط";

    }

    return "🟢 منخفض";
}


// ============================================
// 4. وصف مستوى الخطر
// ============================================

function getRiskDescription(risk) {

    if (risk >= 75) {

        return "⚠️ ظروف بيئية شديدة الخطورة. يُنصح بالتحقق الميداني.";

    }

    if (risk >= 50) {

        return "🟠 الظروف الحالية تشير إلى ارتفاع خطر الحرائق.";

    }

    if (risk >= 25) {

        return "🟡 توجد مؤشرات متوسطة لخطر الحرائق.";

    }

    return "🟢 الظروف البيئية الحالية مستقرة نسبيًا.";
}


// ============================================
// 5. تحديث مؤشرات البيئة
// ============================================

function updateEnvironment() {

    const temperature =
        document.getElementById("temperature");

    const humidity =
        document.getElementById("humidity");

    const soilMoisture =
        document.getElementById("soilMoisture");

    const windSpeed =
        document.getElementById("windSpeed");

    const sensorCount =
        document.getElementById("sensorCount");


    if (temperature) {

        temperature.textContent =
            environmentData.temperature + "°C";
    }


    if (humidity) {

        humidity.textContent =
            environmentData.humidity + "%";
    }


    if (soilMoisture) {

        soilMoisture.textContent =
            environmentData.soilMoisture + "%";
    }


    if (windSpeed) {

        windSpeed.textContent =
            environmentData.windSpeed + " km/h";
    }


    if (sensorCount) {

        sensorCount.textContent =
            environmentData.sensors;
    }
}


// ============================================
// 6. تحديث مؤشر الخطر
// ============================================

function updateRisk() {

    const risk =
        calculateRisk(environmentData);


    const riskLevel =
        getRiskLevel(risk);


    const description =
        getRiskDescription(risk);


    // مستوى الخطر

    const riskLevelElement =
        document.getElementById("riskLevel");

    if (riskLevelElement) {

        riskLevelElement.textContent =
            riskLevel;
    }


    // نسبة الخطر

    const riskScore =
        document.getElementById("riskScore");

    if (riskScore) {

        riskScore.textContent =
            risk;
    }


    // عنوان الخطر

    const riskText =
        document.getElementById("riskText");

    if (riskText) {

        riskText.textContent =
            riskLevel;
    }


    // وصف الخطر

    const riskDescription =
        document.getElementById("riskDescription");

    if (riskDescription) {

        riskDescription.textContent =
            description;
    }


    // ========================================
    // عداد الخطر الدائري
    // ========================================

    const riskCircle =
        document.querySelector(".risk-circle");


    if (riskCircle) {

        const degrees =
            risk * 3.6;


        riskCircle.style.background =
            `conic-gradient(
                #e63946 ${degrees}deg,
                #dfe8e2 ${degrees}deg
            )`;
    }


    console.log(
        "🔥 Risk:",
        risk + "%"
    );
}


// ============================================
// 7. تحديث Dashboard بالكامل
// ============================================

function updateDashboard() {

    updateEnvironment();

    updateRisk();

}


// ============================================
// 8. محاكاة المستشعرات
// ============================================

function updateSensorData() {


    // 🌡️ حرارة بين 25 و40

    environmentData.temperature =
        Math.floor(
            Math.random() * 16
        ) + 25;


    // 💧 رطوبة بين 20 و70

    environmentData.humidity =
        Math.floor(
            Math.random() * 51
        ) + 20;


    // 🌱 رطوبة التربة بين 10 و60

    environmentData.soilMoisture =
        Math.floor(
            Math.random() * 51
        ) + 10;


    // 💨 سرعة الرياح بين 5 و35

    environmentData.windSpeed =
        Math.floor(
            Math.random() * 31
        ) + 5;


    // تحديث Dashboard

    updateDashboard();


    // تحديث الوقت

    const lastUpdate =
        document.getElementById("lastUpdate");


    if (lastUpdate) {

        const now =
            new Date();


        lastUpdate.textContent =
            "آخر تحديث: " +
            now.toLocaleTimeString("ar-DZ");
    }
}


// ============================================
// 9. الخريطة التفاعلية
// ============================================

let forestMap = null;


// تشغيل الخريطة

function initializeMap() {

    // التأكد أن Leaflet موجود

    if (typeof L === "undefined") {

        console.log(
            "⚠️ Leaflet غير متاح."
        );

        return;
    }


    // التأكد أن عنصر الخريطة موجود

    const mapElement =
        document.getElementById("forestMap");


    if (!mapElement) {

        return;
    }


    // إنشاء الخريطة

    forestMap =
        L.map("forestMap").setView(
            [36.75, 5.05],
            10
        );


    // OpenStreetMap

    L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {

            attribution:
                "&copy; OpenStreetMap contributors"

        }
    ).addTo(forestMap);


    // إضافة المستشعرات

    addSensorsToMap();
}


// ============================================
// 10. مستشعرات BioSense التجريبية
// ============================================

const sensors = [

    {

        name: "BioSense-01",

        lat: 36.75,

        lng: 5.05,

        risk: "🟠 مرتفع"

    },


    {

        name: "BioSense-02",

        lat: 36.79,

        lng: 5.12,

        risk: "🟡 متوسط"

    },


    {

        name: "BioSense-03",

        lat: 36.70,

        lng: 5.00,

        risk: "🔴 حرج"

    }

];


// ============================================
// 11. إضافة المستشعرات إلى الخريطة
// ============================================

function addSensorsToMap() {

    if (!forestMap) {

        return;
    }


    sensors.forEach(sensor => {


        L.marker([

            sensor.lat,

            sensor.lng

        ])

        .addTo(forestMap)

        .bindPopup(`

            <strong>
                📡 ${sensor.name}
            </strong>

            <br>

            🔥 مستوى الخطر:
            ${sensor.risk}

            <br>

            🌲 SAHER BioSense AI

        `);

    });
}


// ============================================
// 12. تشغيل النظام
// ============================================

function startSaher() {

    console.log(
        "🌲 SAHER BioSense AI بدأ العمل"
    );


    updateDashboard();


    initializeMap();

}


// ============================================
// 13. تشغيل SAHER بعد تحميل الصفحة
// ============================================

document.addEventListener(
    "DOMContentLoaded",
    startSaher
);