ps aux | grep -v "grep" | grep CloudTechApp | awk '{print$2}' >> cloudtechapp-service.pid
./cloudtechapp-service stop
