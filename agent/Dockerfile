# ---------- Base image ----------
FROM python:3.12-slim

# Set working directory
WORKDIR /app

# Prevent Python from writing .pyc files
ENV PYTHONDONTWRITEBYTECODE=1

# Ensure logs print instantly
ENV PYTHONUNBUFFERED=1

# Install system deps (if needed later)
RUN apt-get update -y && apt-get install -y build-essential

# Copy requirements first (for caching)
COPY requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy rest of the code
COPY . .

# Run your app
CMD ["python", "main.py"]